import React from "react"
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'
import DonationAmount from "./DonationAmount"
import DonationDetails, { DonationDetailsState }  from "./DonationDetails"

import * as sharedStyles from "./shared.module.scss"
import "./Donate.scss"
import classNames from 'classnames';
import {loadStripe} from '@stripe/stripe-js';

import { ProviderType, makePaymentRequest } from './api';


interface DonateState {
  name: string;
  email: string;
  termsAndConditions: boolean;
  amount: number;
  loading: any
}

class Donate extends React.Component<{}, DonateState> {
  state = {
    name: '',
    email: '',
    termsAndConditions: false,
    amount: 0,
    loading: null
  }  

  handleChangeAmount = (amount: number):void => {
    this.setState({ amount });
  }

  handleChangeDetails = (details: DonationDetailsState):void => {
    this.setState(details);
  }

  isValid = ():boolean => {
    return ((this.state.amount > 0) && this.state.name && this.state.email && this.state.termsAndConditions) || false
  }

  handlePayment = (provider: ProviderType) => {
    if(!this.isValid() || this.state.loading !== null) {
      return;
    }

    const { name, email, amount } = this.state

    this.setState({ loading: provider })

    trackCustomEvent({
      category: "Button",
      action: "Click",
      label: `Pay with ${provider}`,
      value: amount,
    })

    makePaymentRequest({ provider, name, email, amount })
    .then((response) => {
      switch (provider) {
      case 'banked':
        window.location.href = response.url;
      case 'stripe':
        loadStripe('pk_test_Yh98EHayrmthPaB6UmyCH5dv').then((stripe: any) => {
          stripe.redirectToCheckout({ sessionId: response.sessionId })
        })
      }
    })
    .catch((e) => {
      alert("Payment failed, please try again")
      this.setState({ loading: null })
    })
  }

  handleBankedPayment = ():void => {
    this.handlePayment('banked')
  }

  handleStripePayment = ():void => {
    this.handlePayment('stripe')
  }

  render() {
    const buttonClassNames = classNames({
      [sharedStyles.button]: true,
      [sharedStyles.buttonEnabled]: this.isValid()
    })

    return (
      <div className="container">

        <h2>How much would you like to donate?</h2>
          <DonationAmount onChange={this.handleChangeAmount} />

        <h2>Enter your details</h2>
          <DonationDetails onChange={this.handleChangeDetails} />

        <h2>How would you like to pay?</h2>

        <button onClick={this.handleBankedPayment} className={buttonClassNames}>
          { this.state.loading == 'banked' ? "Loading..." : "Direct Bank Transfer" }
        </button>

        <p className={sharedStyles.buttonHelp}>Pay direct from your account and we get 100% of your donation</p>

        <button onClick={this.handleStripePayment} className={buttonClassNames}>
          { this.state.loading == 'stripe' ? "Loading..." : "Credit Card" }
        </button>

        <p className={sharedStyles.buttonHelp}>Paying by card will incur processing fees for Heroes</p>
      </div>
    )
  }
}

export default Donate

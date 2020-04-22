import React from "react"
// import { Link } from "gatsby"

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
  stripe: any
  


  async componentDidMount():Promise<void> {
    this.stripe = await loadStripe('pk_test_Yh98EHayrmthPaB6UmyCH5dv')
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
    if(!this.isValid() || this.state.loading) {
      return;
    }

    const { name, email, amount } = this.state
    this.setState({ loading: provider })

    makePaymentRequest({ provider, name, email, amount }).then((response) => {
      switch (provider) {
      case 'banked':
        window.location.href = response.url;
      case 'stripe':
        this.stripe.redirectToCheckout(response.sessionId)
      }
    })
    .catch(() => {
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
        <p>Select a payment method to make your donation securely.</p>

        <p>If you are making a large donation - please consider using ‘Bank Account’ to reduce our fees </p>

        <button onClick={this.handleStripePayment} className={buttonClassNames}>
          { this.state.loading == 'stripe' ? "Loading..." : "Pay by card" }
        </button>
        <button onClick={this.handleBankedPayment} className={buttonClassNames}>
          { this.state.loading == 'banked' ? "Loading..." : "Pay by bank account" }
        </button>
      </div>
    )
  }
}

export default Donate

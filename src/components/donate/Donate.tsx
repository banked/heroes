import React from "react"
// import { Link } from "gatsby"

import DonationAmount from "./DonationAmount"
import DonationDetails from "./DonationDetails"
import * as sharedStyles from "./shared.module.scss"
import "./Donate.scss"
import classNames from 'classnames';
import {loadStripe} from '@stripe/stripe-js';

class Donate extends React.Component<Props, State> {

  state = {
    name: '',
    email: '',
    termsAndConditions: false,
    amount: 0,
    loading: false
  }


  async componentDidMount() {
    this.stripe = await loadStripe('pk_test_Yh98EHayrmthPaB6UmyCH5dv')
  }

  handleChangeAmount = (amount: number) => {
    this.setState({ amount });
  }

  handleChangeDetails = ({ name, email, termsAndConditions }) => {
    this.setState({ name: name, email: email, termsAndConditions: termsAndConditions });
  }

  isValid = () => {
    return (this.state.amount > 0) && this.state.name && this.state.email && this.state.termsAndConditions
  }

  handleBankedPayment = () => {
    if(!this.isValid() || this.state.loading) {
      return;
    }

    const { name, email, termsAndConditions, amount } = this.state
    this.setState({ loading: true })
    fetch("https://europe-west2-banked-heroes-dev.cloudfunctions.net/createBankedPaymentRequest", {
      accept: 'application/json',
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: amount * 100,
        payerName: name,
        payerEmail: email,
      }),
    })
    .then((response) => response.json())
    .then((response) => {
      window.location.href = response.url;
    })
    .catch(() => {
      this.setState({ loading: false })
    })
  }

  handleStripePayment = () => {
    if(!this.isValid() || this.state.loading) {
      return;
    }

    const { name, email, termsAndConditions, amount } = this.state
    this.setState({ loading: true })
    fetch("https://europe-west2-banked-heroes-dev.cloudfunctions.net/createStripePaymentRequest", {
      accept: 'application/json',
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: amount * 100,
        payerName: name,
        payerEmail: email,
      }),
    })
    .then((response) => response.json())
    .then(({ sessionId }) => {
      console.log("HI", sessionId)
      this.stripe.redirectToCheckout({ sessionId })
    })
    .catch((e) => {
      console.log(e)
      this.setState({ loading: false })
    })
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

        <button onClick={this.handleStripePayment} className={buttonClassNames}>Pay by card</button>
        <button onClick={this.handleBankedPayment} className={buttonClassNames}>
          { this.state.loading ? "Loading..." : "Pay by bank account" }
        </button>
      </div>
    )
  }
}

export default Donate

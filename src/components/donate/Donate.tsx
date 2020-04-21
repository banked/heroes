import React from "react"
// import { Link } from "gatsby"

import DonationAmount from "./DonationAmount"
import DonationDetails from "./DonationDetails"
import * as sharedStyles from "./shared.module.scss"
import "./Donate.scss"
import classNames from 'classnames';

class Donate extends React.Component<Props, State> {

  state = {
    name: '',
    email: '',
    termsAndConditions: false,
    amount: 0
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
    const { name, email, termsAndConditions, amount } = this.state

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

        {/* <button className={buttonClassNames}>Pay by card</button> */}
        <button onClick={this.handleBankedPayment} className={buttonClassNames}>Pay by bank account</button>
      </div>
    )
  }
}

export default Donate

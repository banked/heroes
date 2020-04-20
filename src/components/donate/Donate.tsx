import React from "react"
// import { Link } from "gatsby"

import DonationAmount from "./DonationAmount"
import DonationDetails from "./DonationDetails"

class Donate extends React.Component<Props, State> {

  state = {
    name: '',
    email: ''
  }
  
  handleChangeAmount = (amount) => {
    console.log(amount)
    this.setState({ amount });
  }

  handleChangeDetails = ({ name, email }) => {
    this.setState({ name: name, email: email });
  }

  render() {
    const {
        name, email
      } = this.state;
    return (
      <div>
        <h2>How much would you like to donate?</h2>
          <DonationAmount onChange={this.handleChangeAmount} />
        <h2>Enter your details</h2>
          <DonationDetails name={name} email={email} onChange={this.handleChangeDetails} />
        <h2>How would you like to pay?</h2>
        </div>
    )
  }
}

export default Donate

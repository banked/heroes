import React from "react"

import * as styles from "./DonationAmount.module.scss"


const DONATION_AMOUNTS = [5,10,20,50,100,250]

class DonationAmount extends React.Component<Props, State> {

  state = {
    amount: 0
  }

  handleAmountChange = (e) => {
    const amount = parseInt(e.target.dataset['amount'])
    this.setState({customAmount: 0, amount: amount})
    this.props.onChange(amount)
  };

  handleCustomAmountChange = (e) => {
    const amount = e.target.value
    this.setState({amount: 0, customAmount: amount})
    this.props.onChange(amount)
  };

  renderButton = (amount, i) => {
    console.log('amount', amount)
    console.log(this.state.amount)
    let classNames = styles.button
    if (amount === this.state.amount) {
      classNames = `${styles.button} ${styles.selected}`
    }
    return <button onClick={this.handleAmountChange} data-amount={amount} className={classNames} key={i}>£{amount}</button>
  }

  renderCustomAmount = (customAmount) => {
    let classNames = styles.custom
    if (customAmount > 0) {
      classNames = `${styles.custom} ${styles.custom_selected}`
    }
    return (<div className={classNames}>
      <span>£</span>
      <input
        type="number"
        value={customAmount > 0 ? customAmount : ''}
        placeholder="Enter amount"
        onChange={this.handleCustomAmountChange}
      />
    </div>)
  }


    render() {
      return (
        <div className={styles.buttons}>
          {DONATION_AMOUNTS.map((amount, i) => this.renderButton(amount, i))}
          {this.renderCustomAmount(this.state.customAmount)}
        </div>
      )
    }
  }


  export default DonationAmount

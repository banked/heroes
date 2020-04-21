import React from "react"
import classNames from 'classnames';

import * as styles from "./DonationAmount.module.scss"


const DONATION_AMOUNTS = [5,10,20,50,100,250]

class DonationAmount extends React.Component<Props, State> {

  state = {
    amount: 0,
    customAmount: null
  }

  handleAmountChange = (e: Event) => {
    const amount = parseInt(e.target.dataset['amount'])
    this.setState({customAmount: null, amount: amount})
    this.props.onChange(amount)
  };

  handleCustomAmountChange = (e: Event) => {
    const amount = e.target.value
    this.setState({amount: 0, customAmount: amount})
    this.props.onChange(amount)
  };

  initCustomAmount = () => {
    this.setState({amount: 0, customAmount: 0})
  }

  renderButton = (amount: number, i) => {
    const buttonClassNames = classNames({
      [styles.button]: true,
      [styles.selected]: (amount === this.state.amount)
    })

    return <button onClick={this.handleAmountChange} data-amount={amount} className={buttonClassNames} key={i}>£{amount}</button>
  }

  renderCustomAmount = (customAmount: number) => {
    const divClassNames = classNames({
      [styles.custom]: true,
      [styles.custom_selected]: (customAmount !== null)
    })

    return (<div className={divClassNames}>
      <span>£</span>
      <input
        type="number"
        value={customAmount || ''}
        placeholder="Enter amount"
        onChange={this.handleCustomAmountChange}
        onFocus={this.initCustomAmount}
        min="0"
        max="1000"
        step="0.01"
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

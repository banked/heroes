import React from "react"
import classNames from 'classnames';

import * as styles from "./DonationAmount.module.scss"


const DONATION_AMOUNTS = [5,10,20,50,100,250]

interface Props {
  onChange: (amount: number) => void
}

interface State {
  amount: number,
  customAmount: number | undefined
}

class DonationAmount extends React.Component<Props, State> {

  state = {
    amount: 0,
    customAmount: undefined
  }

  handleAmountChange = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    const presetAmount = parseInt(e.currentTarget.dataset['amount'] || '')
    this.setState({customAmount: undefined, amount: presetAmount})
    this.props.onChange(presetAmount)
  };

  handleCustomAmountChange = (e: React.FormEvent<HTMLInputElement>) => {
    const customAmount = parseFloat(e.currentTarget.value)
    this.setState({ amount: 0, customAmount })
    this.props.onChange(customAmount)
  };

  initCustomAmount = () => {
    this.setState({ amount: 0, customAmount: 0 })
  }

  renderButton = (amount: number, i: number) => {
    const buttonClassNames = classNames({
      [styles.button]: true,
      [styles.selected]: (amount === this.state.amount)
    })

    return <button onClick={this.handleAmountChange} data-amount={amount} className={buttonClassNames} key={i}>£{amount}</button>
  }

  renderCustomAmount = (customAmount: number | undefined) => {
    const divClassNames = classNames({
      [styles.custom]: true,
      [styles.custom_selected]: (customAmount !== undefined)
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

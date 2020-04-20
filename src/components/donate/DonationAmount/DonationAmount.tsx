import React from "react"

import * as styles from "./DonationAmount.module.scss"


const DONATION_AMOUNTS = [5,10,20,50,100,250]

class DonationAmount extends React.Component<Props, State> {
 
  state = {
    amount: 0
  }
  handleAmountChange = (e) => {
    this.setState({customAmount: 0 })
    this.props.onChange(e.target.dataset['amount']);
  };

  handleCustomAmountChange = (e) => {
    const amount = e.target.value
    this.setState({customAmount: amount})
    this.props.onChange(amount);
  };


    render() {
      return (
        <div>
          {DONATION_AMOUNTS.map((object, i) => <button onClick={this.handleAmountChange} data-amount={object} className={styles.button} key={i}>{object}</button>)}
          <div>
            <input
              type="number"
              value={this.state.customAmount > 0 ? this.state.customAmount : ''}
              placeholder="Enter amount"
              onChange={this.handleCustomAmountChange}
            />
          </div>
      </div>
      )
    }
  }
  

  export default DonationAmount
import React from "react"

import * as styles from "./DonationDetails.module.scss"

class DonationDetails extends React.Component<Props, State> {

  handleNameChange = (e) => {
    this.props.onChange({ name: e.target.value });
  };

  handleEmailChange = (e) => {
    this.props.onChange({ email: e.target.value });
  };
    
    render() {
      return (
        <div>
            <div className={styles.details__fields}>
            <div className="your-details__field">
              <label className="your-details__field__label" htmlFor="payment_session_user_name">Full Name</label>
              <input
                required
                ref={this.nameInput}
                type="text"
                className="your-details__field__input"
                placeholder="Enter your full name"
                onChange={this.handleNameChange}
                value={this.props.name}
                autoComplete="name"
                id="payment_session_user_name"
              />
            </div>
            <div className="your-details__field">
              <label className="your-details__field__label" htmlFor="payment_session_email">Email Address</label>
              <input
                required
                ref={this.emailInput}
                type="email"
                className="your-details__field__input"
                placeholder="Enter your email address"
                onChange={this.handleEmailChange}
                value={this.props.email}
                autoComplete="email"
                id="payment_session_email"
              />
            </div>
          </div>
        </div>
      )
    }
  }
  

  export default DonationDetails
import React from "react"

import * as styles from "./DonationDetails.module.scss"

class DonationDetails extends React.Component<Props, State> {

  state = {
    name: '',
    email: '',
    termsAndConditions: false
  }

  handleNameChange = (e: Event) => {
    this.setState({ name: e.target.value });
  };

  handleEmailChange = (e: Event) => {
    this.setState({ email: e.target.value });
  };

  handleTermsAndConditionsChange = (e: Event) => {
    this.setState({ termsAndConditions: e.target.checked });
  };


  componentDidUpdate(prevProps, prevState) {
    if(prevState.name != this.state.name || prevState.email != this.state.email || prevState.termsAndConditions != this.state.termsAndConditions) {
      this.props.onChange({
        name: this.state.name,
        email: this.state.email,
        termsAndConditions: this.state.termsAndConditions
      });
    }
  }

  render() {
    const {
      name, email, termsAndConditions
    } = this.state;
    return (
      <div>
          <div className={styles.details__fields}>
          <div>
            <label className={styles.inputLabel} htmlFor="payment_session_user_name">Full Name</label>
            <input
              required
              ref={this.nameInput}
              className={styles.input}
              type="text"
              placeholder="Enter your full name"
              onChange={this.handleNameChange}
              value={name}
              autoComplete="name"
              id="payment_session_user_name"
            />
          </div>
          <div>
            <label className={styles.inputLabel} htmlFor="payment_session_email">Email Address</label>
            <input
              required
              ref={this.emailInput}
              className={styles.input}
              type="email"
              placeholder="Enter your email address"
              onChange={this.handleEmailChange}
              value={email}
              autoComplete="email"
              id="payment_session_email"
            />
          </div>

          <div className={styles.termsAndConditions}>
            <label htmlFor="payment_session_terms_and_conditions">
            <input
              required
              ref={this.termsAndConditions}
              type="checkbox"
              onChange={this.handleTermsAndConditionsChange}
              value={termsAndConditions}
              id="payment_session_terms_and_conditions"
            />
            I have read and accept the <a href="#">terms &amp; conditions</a>
            </label>
          </div>
        </div>
      </div>
    )
  }
}
  
export default DonationDetails
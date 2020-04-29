import React from "react"
import classnames from "classnames"

import * as styles from "./DonationDetails.module.scss"

interface Props {
  onChange: (details: DonationDetailsState) => void
}

export interface DonationDetailsState {
  name: string;
  email: string;
  termsAndConditions: boolean;
  emailValid: boolean,
}

class DonationDetails extends React.Component<Props, DonationDetailsState> {

  state = {
    name: '',
    email: '',
    termsAndConditions: false,
    emailValid: true,
  }

  handleNameChange = (e: React.FormEvent<HTMLInputElement>):void => {
    this.setState({ name: e.currentTarget.value });
  };

  handleEmailChange = (e: React.FormEvent<HTMLInputElement>):void => {
    this.setState({ email: e.currentTarget.value, emailValid: e.currentTarget.validity.valid || e.currentTarget.value === '' });
  };

  handleTermsAndConditionsChange = (e: React.FormEvent<HTMLInputElement>):void => {
    this.setState({ termsAndConditions: e.currentTarget.checked });
  };

  componentDidUpdate(_: any, prevState:DonationDetailsState) {
    const { name, email, termsAndConditions } = this.state;
    if(prevState.name != name || prevState.email != email || prevState.termsAndConditions != termsAndConditions) {
      this.props.onChange({ name, email, termsAndConditions });
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
              className={!this.state.emailValid ? classnames(styles.input_error, styles.input)  : styles.input}
              type="email"
              placeholder="Enter your email address"
              onChange={this.handleEmailChange}
              value={email}
              autoComplete="email"
              id="payment_session_email"
            />
            {!this.state.emailValid && <span className={styles.error}>Please enter a valid email address</span>}
          </div>

          <div className={styles.termsAndConditions}>
            <label htmlFor="payment_session_terms_and_conditions">
            <input
              required
              type="checkbox"
              onChange={this.handleTermsAndConditionsChange}
              checked={termsAndConditions}
              id="payment_session_terms_and_conditions"
            />
            I have read and agree the <a href="https://www.helpthemhelpus.co.uk/privacy/">privacy policy</a>
            </label>
          </div>
        </div>
      </div>
    )
  }
}
  
export default DonationDetails

import React from "react"

import * as styles from "./contactUs.module.scss"

import googleForms from "../../../images/googleForms.png"

const links = [
  {
    displayText: "I Want More Information",
    link: "https://forms.gle/uFmNtFXtH3JHaC4H7",
  },
  {
    displayText: "I Want To Help",
    link: "https://forms.gle/jivsKZTAeduKYWaq5",
  },
]

const ContactUs = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Get in touch</h1>
      <h4 className={styles.byline}>
        We're working hard to support as many people as possible, and could use
        your help! Please use one of the forms below to get in touch. Whether
        you're writing on behalf a corporation or yourself, we welcome all
        communication, assistance, donations, questions, or words of
        encouragement!
      </h4>
      <div className={styles.contentContainer}>
        {links.map(link => (
          <a
            className={styles.button}
            key={link.displayText}
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.buttonText}>{link.displayText}</span>
          </a>
        ))}
      </div>
      <img className={styles.googleFormsLogo} src={googleForms} alt="" />
    </div>
  )
}

export default ContactUs

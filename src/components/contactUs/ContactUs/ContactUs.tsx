import React from "react"

import * as styles from "./contactUs.module.scss"

import googleForms from "../../../images/googleForms.png"

const links = [
  {
    displayText: "Corporate Partnerships",
    link: "https://forms.gle/yoVQgSsYpRGqfpmPA",
  },
  {
    displayText: "General Enquiries",
    link: "https://forms.gle/sYgjsWdeqrqbA9pL9",
  },
  {
    displayText: "Volunteering",
    link: "https://forms.gle/4TYodzTUtybRRu9D9",
  },
]

const ContactUs = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Get in touch</h1>
      <h4 className={styles.byline}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitati.
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

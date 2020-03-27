import React from "react"
import { Link } from "gatsby"
import Footer from "../../Footer"

import * as styles from "./ambassadors.module.scss"

import Logo from "../../../images/logo.inline.svg"
import joeCole from "../../../images/joe_cole.jpg"
import joeColeInstagram from "../../../images/joe_cole_instagram.png"

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Ambassadors</h1>
      <h4 className={styles.byline}>
        HEROES relies on generous contributions from our donors, volunteers, and
        partners to help our frontline NHS staff. Our ambassadors help us
        communicate our message far and wide, garnering crucial support,
        publicity and goodwill.
      </h4>
      <img className={styles.mainImage} src={joeCole} alt="" />
      <div className={styles.contentContainer}>
        <h6 className={styles.name}>Joe Cole</h6>
        <p className={styles.position}>Former England Footballer</p>
        <p className={styles.biography}>
          Former England Footballer and now BT Sport pundit, Joe Cole has
          committed his dedication to the cause as an ambassador for Heroes and
          will play a key role in leading this important initiative to help NHS
          workers on the front line. Joe is passionate about this project and
          has offered to support the initiative not just in the short term but
          beyond and has also donated a generous £25,000 of his own money.
        </p>
        <a
          className={styles.instagramLink}
          href="https://www.instagram.com/therealjoecole/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className={styles.instagram} src={joeColeInstagram} alt="" />
        </a>
      </div>
    </div>
  )
}

export default AboutUs

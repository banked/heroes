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
      <Link to="/">
        <Logo />
      </Link>
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
        <p className={styles.position}>Philanthropist</p>
        <p className={styles.biography}>
          Joseph John Cole (born 8 November 1981) is an English football coach
          and former professional footballer who played as an attacking
          midfielder or winger in the Premier League, Ligue 1, League One and
          United Soccer League.
        </p>
        <p className={styles.biography}>
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
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

      <Footer />
    </div>
  )
}

export default AboutUs

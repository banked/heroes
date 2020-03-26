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
        <p className={styles.biography}>
          From his first debut in 1999 at West Ham to his exceptional years at
          Chelsea, Liverpool and Aston Villa, Joe Cole captivated the football
          world with his versatile and technical play. He won numerous trophies,
          including the Premier League and FA Cup, as well as scoring 10 goals
          for the English national team.
        </p>
        <p className={styles.biography}>
          Joe is passionate about supporting the NHS Heroes that help keep us
          all safe. He is proud to be an Ambassador.
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

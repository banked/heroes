import React from "react"
import Footer from "../../Footer"
import Header from "../../Header"
import { Link } from "gatsby"

import * as styles from "./textContentColumn.module.scss"

import Logo from "../../../images/logo.inline.svg"
import Title from "../../../images/help_them_help_us.inline.svg"
import gofundmeLogo from "../../../images/gofundme.svg"
import signatures from "../../../images/signatures.svg"
import bmaMobile from "../../../images/bma.png"
import nhsCharity from "../../../images/nhscharity.png"

const TextContentColumn = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.overlayContainer}>
          <div className={styles.overlayTop}></div>
          <div className={styles.overlayBottom}></div>
        </div>
        <div className={styles.mobileBackgroundContainer}>
          <div className={styles.linksContainer}>
            <div className={styles.logoContainer}>
              <Link className={styles.logo} to="/">
                <Logo />
              </Link>
            </div>
            <Header homepage={true} />
          </div>
          <div className={styles.titleContainer}>
            <Title />
          </div>
          <div className={styles.byline}>
            Providing for the welfare and wellbeing of NHS staff on the
            frontline of the pandemic.
          </div>
          <div className={styles.videoContainer}>
            <div className={styles.spot1}></div>
            <div className={styles.spot2}></div>
            <div className={styles.spot3}></div>
            <div className={styles.spot4}></div>
            <div className={styles.spot5}></div>
            <div className={styles.video}>
              <iframe
                src="https://player.vimeo.com/video/399659174"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.gofundmeContainer}>
            <a
              className={styles.gofundmeLink}
              href="https://www.gofundme.com/f/help-them-help-us"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles.gofundmeButton} type="button">
                <img
                  className={styles.gofundmeLogo}
                  src={gofundmeLogo}
                  alt=""
                />
              </button>
            </a>
            <a
              className={styles.gofundmeLinkDonate}
              href="https://www.gofundme.com/f/help-them-help-us"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className={styles.donateByline}>Donate now</p>
            </a>
          </div>
          <p className={styles.textContent}>Dear friend,</p>
          <p className={styles.textContent}>
            Thank you for agreeing to help out with this endeavour. Our mission
            statement is to support, in big and small ways, the welfare and
            wellbeing of NHS staff as they fight COVID-19. We want to get things
            going ASAP. The virus is moving fast, so in order to support the
            staff on the frontline we need to move even faster.
          </p>
          <p className={styles.textContent}>
            We want to provide an avenue for the public to help out the effort.
            Our aims are to support the physical, mental, and day to day
            wellbeing of NHS staff across the nation. Physically to support the
            protection of our staff on the frontline. Mentally we aim to provide
            counselling and psychological services. Day to day we want to set up
            a hassle-free small grants service to support childcare, transport,
            to provide perks for hospital facilities and more. We want to use
            our platform to also provide public and professional education
            resources on coronavirus, and build a cross-professional platform to
            help share tips and advice.
          </p>
          <p className={styles.textContent}>
            We are a top-down, agile organisation that is built on trust.
            Together we can make the lives of those saving lives a little
            easier.
          </p>
          <p className={styles.textContent}>Thank you again,</p>
        </div>
        <div className={styles.signatures}>
          <img src={signatures} alt="" />
        </div>
        <a
          href="https://www.bma.org.uk/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.supportLink}
        >
          <img className={styles.bmaLogo} src={bmaMobile} alt="" />
        </a>
      </div>
      <Footer />
    </>
  )
}

export default TextContentColumn

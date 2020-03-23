import React from "react"
import GofundmeButton from "../shared/GofundmeButton"
import { Link } from "gatsby"

import * as styles from "./videoColumn.module.scss"

import bma from "../../../images/bma.png"

const VideoColumn = () => {
  return (
    <div className={styles.container}>
      <div className={styles.videoContainer}>
        <div className={styles.videoInnerContainer}>
          <div className={styles.spot1}></div>
          <div className={styles.spot2}></div>
          <div className={styles.spot3}></div>
          <div className={styles.spot4}></div>
          <div className={styles.spot5}></div>
          <div className={styles.spot6}></div>
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
      <div className={styles.leftColumn}>
        <div className={styles.headerLinks}>
          <Link className={styles.headerLink} to="/about-us">
            About Us
          </Link>
        </div>
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.headerLinks}>
          <a
            className={styles.donate}
            href="https://www.gofundme.com/f/help-them-help-us"
            target="_blank"
            rel="noopener noreferrer"
          >
            Donate Now
          </a>
          <GofundmeButton />
        </div>
        <a
          href="https://www.bma.org.uk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className={styles.bmaLogo} src={bma} alt="" />
        </a>
      </div>
    </div>
  )
}

export default VideoColumn

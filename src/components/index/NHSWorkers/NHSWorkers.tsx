import React from "react"
import * as styles from "./nhsWorkers.module.scss"

import bma from "../../../images/bma.png"
import handHoldingHeart from "../../../images/hand_holding_heart.png"
import { Link } from "gatsby"

const NHSWorkers = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.content}>
          <h4 className={styles.title}>
            Are you an NHS worker that needs assistance?
          </h4>
          <p className={styles.description}>
            We offer help with childcare, transport, food, hardship funding,
            wellbeing and psychological services for ALL healthcare staff.
          </p>
          <Link to="/nhs-workers">
            <button className={styles.moreInfo}>More Info</button>
          </Link>
          <div className={styles.supportedBy}>
            <span>Supported By</span>
            <img src={bma} alt="" />
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src={handHoldingHeart} alt="" />
        </div>
      </div>
    </div>
  )
}

export default NHSWorkers

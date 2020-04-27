import React from "react"
import * as styles from "./mobileWhatWeveDone.module.scss"
import { stats } from "../Hero/Hero"
import { Link } from "gatsby"

const mobileWhatWeveDone = () => (
  <div className={styles.container}>
    <div className={styles.innerContainer}>
      <h4 className={styles.title}>What We've Done</h4>
      <p className={styles.description}>
        We've been blown away by the support so far. With your help in four
        weeks we have achieved.
      </p>
      <div className={styles.statsContainer}>
        {stats.map(stat => (
          <div key={stat.description} className={styles.statContainer}>
            <div className={styles.statIconContainer}>
              <img src={stat.icon} alt="" />
            </div>
            <div className={styles.content}>
              <span className={styles.stat}>{stat.stat}</span>
              <span className={styles.statDescription}>{stat.description}</span>
            </div>
          </div>
        ))}
      </div>
      <Link to="/about-us">
        <button className={styles.button}>About Us</button>
      </Link>
    </div>
  </div>
)

export default mobileWhatWeveDone

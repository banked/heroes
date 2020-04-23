import React from "react"
import * as styles from "./mobileWhatWeveDone.module.scss"
import { stats } from "../Hero/Hero"
import { Link } from "gatsby"

const mobileWhatWeveDone = () => (
  <div className={styles.container}>
    <div className={styles.innerContainer}>
      <h4 className={styles.title}>What We've Done</h4>
      <p className={styles.description}>
        Laudem et voluptates omittantur maiorum voluptatum deleniti atque
        insitam in. Primum igitur, quid et molestiae consequatur, vel illum.
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
      <Link to="/about">
        <button className={styles.button}>About Us</button>
      </Link>
    </div>
  </div>
)

export default mobileWhatWeveDone

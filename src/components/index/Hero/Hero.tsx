import React from "react"
import classnames from "classnames"
import * as styles from "./hero.module.scss"
import DesktopBarometer from "../Barometer/DesktopBarometer"
import MobileBarometer from "../Barometer/MobileBarometer"

import grantsIcon from "../../../images/grants_icon.svg"
import ppeIcon from "../../../images/ppe_icon.svg"
import foodIcon from "../../../images/food_icon.svg"

export const stats = [
  {
    icon: ppeIcon,
    stat: "10,000",
    description: "PPE units sourced",
  },
  {
    icon: foodIcon,
    stat: "30,677",
    description: "meals and treats to NHS workers",
  },
  {
    icon: grantsIcon,
    stat: "£150,000",
    description: "hardship fund for financial relief",
  },
]

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.textContentColumn}>
          <h1 className={styles.title}>Help them </h1>
          <h1 className={classnames(styles.title, styles.lowercase)}>
            Help us
          </h1>
          <p className={styles.description}>
            HEROES is a charity founded by NHS workers, for NHS workers. We
            exist to support the welfare and wellbeing of those fighting to keep
            us healthy and safe during the COVID-19 crisis, and beyond. Our
            services cover the physical, mental and day-to-day needs of all NHS
            HEROES, from doctors and nurses to cleaners and porters. Together,
            we’ll continue to make a real difference.
          </p>
          <div className={styles.statsContainer}>
            {stats.map(stat => (
              <div key={stat.description} className={styles.statContainer}>
                <div className={styles.statIconContainer}>
                  <img className={styles.icon} src={stat.icon} alt="" />
                </div>
                <span className={styles.stat}>{stat.stat}</span>
                <span className={styles.statDescription}>
                  {stat.description}
                </span>
              </div>
            ))}
          </div>
          <div className={styles.mobileBarometer}>
            <MobileBarometer />
          </div>
        </div>
        <div className={styles.videoContainer}>
          <iframe
            src="https://player.vimeo.com/video/399659174"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className={styles.desktopBarometer}>
        <DesktopBarometer />
      </div>
    </div>
  )
}

export default Hero

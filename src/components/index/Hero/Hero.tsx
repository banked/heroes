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
    description: "PPE units delivered",
  },
  {
    icon: foodIcon,
    stat: "3,200",
    description: "Meals to NHS workers",
  },
  {
    icon: grantsIcon,
    stat: "£78,000",
    description: "Financial relief",
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
            Omne animal, simul atque corrupti, quos tu tam egregios viros censes
            tantas res gessisse sine causa? quae fuerit causa, nollem me ab illo
            inventore veritatis et impetus quo voluptas in bonis sit extremum et
            dolore.
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

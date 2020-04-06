import React from "react"
import * as styles from "./hero.module.scss"
import VideoColumn from "../VideoColumn"
import TextContentColumn from "../TextContentColumn"
import Barometer from "../Barometer/DesktopBarometer"

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContentColumn}>
        <TextContentColumn />
      </div>
      <div className={styles.videoColumn}>
        <VideoColumn />
      </div>
      <Barometer />
    </div>
  )
}

export default Hero

import React from "react"
import * as styles from "./hero.module.scss"
import VideoColumn from "../VideoColumn"
import TextContentColumn from "../TextContentColumn"

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContentColumn}>
        <TextContentColumn />
      </div>
      <div className={styles.videoColumn}>
        <VideoColumn />
      </div>
    </div>
  )
}

export default Hero

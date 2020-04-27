import React from "react"
import * as styles from "./stayInformed.module.scss"

const NHSWorkers = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.content}>
          <h4 className={styles.title}>Stay informed about Covid-19</h4>
          <p className={styles.description}>
            Learn more about coronavirus and what you can do at
            stopthespread.info - a website written by doctors dedicated to
            providing reliable and actionable information from trusted sources.
          </p>
          <a
            href="https://stopthespread.info"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={styles.moreInfo}>Visit Website</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default NHSWorkers

import React from "react"

import * as styles from "./barometer.module.scss"

const Barometer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.barometer}></div>
        <div className={styles.content}>
          <h6 className={styles.amount}>£321,629</h6>
          <p className={styles.target}>raised of £1,000,000 target</p>
          <p className={styles.description}>
            This is a total of the Gofundme money raised and direct money
            donated to the foundation.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Barometer

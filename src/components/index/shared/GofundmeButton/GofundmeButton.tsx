import React from "react"

import * as styles from "./gofundmeButton.module.scss"

import gofundmeLogo from "../../../../images/gofundme.svg"

const GofundmeButton = () => {
  return (
    <a
      className={styles.gofundmeLink}
      href="https://www.gofundme.com/f/help-them-help-us"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className={styles.gofundmeButton} type="button">
        <img className={styles.gofundmeLogo} src={gofundmeLogo} alt="" />
      </button>
    </a>
  )
}

export default GofundmeButton

import React from "react"

import * as styles from "./partners.module.scss"

import bma from "../../../images/partners/bma.png"
import chilliBees from "../../../images/partners/chilli_bees.png"
import story from "../../../images/partners/story.png"
import williamWhite from "../../../images/partners/william_white.png"

const content = [
  {
    name: "William White",
    icon: williamWhite,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Restaurant Story",
    icon: story,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Chilli Bees",
    icon: chilliBees,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "BMA",
    icon: bma,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
]

const Partners = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>PARTNERS</h1>
      <h4 className={styles.byline}>
        Our NHS frontline staff depend on the generosity of our partners. We’re
        all thankful for their substantive contributions, which are always
        welcome.
      </h4>
      <div className={styles.content}>
        {content.map(item => (
          <div key={item.name} className={styles.itemContainer}>
            <div className={styles.logoContainer}>
              <img className={styles.logo} src={item.icon} alt="" />
            </div>
            <div className={styles.textContent}>
              <p className={styles.heading}>{item.name}</p>
              <p className={styles.text}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Partners

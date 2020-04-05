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
      "The London butchers’ partnered with HEROES to deliver fresh ingredients, a selection of top quality meats and vegetables to the homes of NHS staff to keep their kitchens fully stocked. ",
  },
  {
    name: "Restaurant Story",
    icon: story,
    description:
      "When Tom Sellers was forced to close his Michelin starred Restaurant Story due to government restrictions, he turned his efforts into preparing and delivering 50 filling lunches to Guys’ Hospital staff.",
  },
  {
    name: "Chilli Bees",
    icon: chilliBees,
    description:
      "Before Chilli Bees closed their kitchens for lockdown, they were able to cook over 800 wholesome meals for the NHS staff at St George’s and Royal Brompton Hospitals. While their business is closed, owner Ellie and her mum will continue to cook what they can from home for the staff of St George’s.",
  },
  {
    name: "BMA",
    icon: bma,
    description:
      "The doctors' trade union launched an online fundraising page, BMA Giving, which will combine efforts with HEROES to direct any donations to several doctor and medical student-focused charities, where they will benefit their colleagues the most.",
  },
]

const Partners = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>COLLABORATORS</h1>
      <h4 className={styles.byline}>
        Our NHS frontline staff depend on the generosity of our collaborators.
        We’re all thankful for their substantive contributions, which are always
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

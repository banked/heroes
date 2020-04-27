import React from "react"
import { Link } from "gatsby"
import classnames from "classnames"

import * as styles from "./forNHSWorkers.module.scss"

import food from "../../../images/forNHSWorkers/food.png"
import ppe from "../../../images/forNHSWorkers/ppe.png"
import counselling from "../../../images/forNHSWorkers/counselling.png"
import grants from "../../../images/forNHSWorkers/grants.png"
import childcare from "../../../images/forNHSWorkers/childcare.png"
import transport from "../../../images/forNHSWorkers/transport.png"

const items = [
  {
    icon: ppe,
    label: "PPE",
    shortLabel: "PPE",
    link: "/nhs-workers/ppe",
  },
  {
    icon: food,
    label: "Meals & Food",
    shortLabel: "Meals & Food",
    link: "/nhs-workers/meals-and-food",
  },
  {
    icon: childcare,
    label: "Childcare",
    shortLabel: "Childcare",
    link: "/nhs-workers/childcare",
  },
  {
    icon: counselling,
    label: "Counselling Therapy",
    shortLabel: "Counselling",
    link: "/nhs-workers/counselling",
  },
  {
    icon: transport,
    label: "Transport",
    shortLabel: "Transport",
    link: null,
  },
  {
    icon: grants,
    label: "Grants & Financial Assistance",
    shortLabel: "Grants",
    link: "/grants-and-financial-assistance",
  },
]

const ConditionalLink = ({
  link,
  children,
}: {
  link: string | null
  children: React.ReactNode
}) =>
  link ? (
    link.charAt(0) === "/" ? (
      <Link className={styles.link} to={link}>
        {children}
      </Link>
    ) : (
      <a
        className={styles.link}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    )
  ) : (
    <div className={classnames(styles.link, styles.disabled)}>{children}</div>
  )

const ForNHSWorkers = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h1 className={styles.title}>For NHS Workers</h1>
        <p className={styles.description}>
          HEROES’ singular mission is to give back directly to you, frontline
          NHS workers and support you through the current crisis and beyond.
          Click below to explore how we can help.
        </p>
        <div className={styles.itemsContainer}>
          {items.map(item => (
            <ConditionalLink key={item.label} link={item.link}>
              <div className={styles.innerLinkContainer}>
                <div className={styles.iconContainer}>
                  <img className={styles.icon} src={item.icon} alt="" />
                </div>
                <span
                  className={classnames(
                    styles.itemDescription,
                    styles.longDescription
                  )}
                >
                  {item.label}
                </span>
                <span
                  className={classnames(
                    styles.itemDescription,
                    styles.shortDescription
                  )}
                >
                  {item.shortLabel}
                </span>
              </div>
            </ConditionalLink>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ForNHSWorkers

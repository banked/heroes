import React from "react"
import { Link } from "gatsby"
import classnames from "classnames"

import * as styles from "./forNHSWorkers.module.scss"

import foodIcon from "../../../images/food_icon.svg"

const items = [
  {
    icon: foodIcon,
    label: "PPE",
    shortLabel: "PPE",
    link: "/nhs-workers/ppe",
  },
  {
    icon: foodIcon,
    label: "Meals & Food",
    shortLabel: "Meals & Food",
    link: "/nhs-workers/meals-and-food",
  },
  {
    icon: foodIcon,
    label: "Childcare",
    shortLabel: "Childcare",
    link: "/nhs-workers/childcare",
  },
  {
    icon: foodIcon,
    label: "Counselling Therapy",
    shortLabel: "Counselling",
    link: "/nhs-workers/counselling",
  },
  {
    icon: foodIcon,
    label: "Transport",
    shortLabel: "Transport",
    link: "#",
  },
  {
    icon: foodIcon,
    label: "Grants & Financial Assistance",
    shortLabel: "Grants",
    link: "/grants-and-financial-assistance",
  },
]

const ConditionalLink = ({
  link,
  children,
}: {
  link: string
  children: React.ReactNode
}) =>
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

const ForNHSWorkers = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h1 className={styles.title}>For NHS Workers</h1>
        <p className={styles.description}>
          In quo quaerimus, non possim nostros? quos tu tam crudelis fuisse,
          nihil oportere exquisitis rationibus conquisitis voluptate velit esse,
          quam interrogare aut odit.
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

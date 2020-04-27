import * as React from "react"
import { Link } from "gatsby"

import * as styles from "./comingSoon.module.scss"

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

export interface Details {
  title: string
  byline: string
  applyFor: string
  icon: string
  applyByline: string | JSX.Element
  basicContent?: {
    website: string
    buttonText?: string
  }
  customContent?: JSX.Element
}

const ComingSoonPage = ({ details }: { details: Details }) => (
  <div className={styles.container}>
    <div className={styles.innerContainer}>
      <div className={styles.imageContainer}>
        <img src={details.icon} alt="" />
      </div>
      <h1 className={styles.title}>{details.title}</h1>
      <p className={styles.byline}>{details.byline}</p>
      <div className={styles.applicationContainer}>
        <h4 className={styles.applicationTitle}>
          Apply for {details.applyFor}
        </h4>
        <p className={styles.applicationByline}>{details.applyByline}</p>
        {details.basicContent && (
          <div className={styles.linkContainer}>
            <ConditionalLink link={details.basicContent.website}>
              <button className={styles.button}>
                {details.basicContent.buttonText ? (
                  <>{details.basicContent.buttonText}</>
                ) : (
                  <>Apply for {details.applyFor}</>
                )}
              </button>
            </ConditionalLink>
          </div>
        )}
        {details.customContent && (
          <div className={styles.customContentContainer}>
            {details.customContent}
          </div>
        )}
      </div>
    </div>
  </div>
)

export default ComingSoonPage

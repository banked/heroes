import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as styles from "./privacyPolicy.module.scss"

const itemsQuery = () =>
  useStaticQuery(graphql`
    query {
      markdownRemark(fileAbsolutePath: { regex: "/privacyPolicyContent/" }) {
        html
      }
    }
  `)

const PrivacyPolicy = () => {
  const data = itemsQuery()
  return (
    <div className={styles.container}>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
      ></div>
    </div>
  )
}

export default PrivacyPolicy

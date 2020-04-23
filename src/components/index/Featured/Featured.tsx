import React from "react"
import * as styles from "./featured.module.scss"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Featured = () => {
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(filter: { relativeDirectory: { eq: "featured" } }) {
          edges {
            node {
              childImageSharp {
                fixed {
                  ...GatsbyImageSharpFixed_noBase64
                }
              }
            }
          }
        }
      }
    `
  )
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Featured On</h4>
      <div className={styles.innerContainer}>
        {allFile.edges.map(edge => {
          return (
            <div className={styles.imageContainer} key={edge.node.id}>
              <Img
                className={styles.image}
                fixed={edge.node.childImageSharp.fixed}
                alt=""
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Featured

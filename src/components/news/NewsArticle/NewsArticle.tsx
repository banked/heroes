import * as React from "react"
import * as styles from "./newsArticle.module.scss"
import { FluidObject } from "gatsby-image"
import Img from "gatsby-image"
import Socials from "./ShareSocials"

export type Article = {
  html: string
  frontmatter: {
    title: string
    date: Date
    image: {
      childImageSharp: {
        fluid: FluidObject
      }
    }
  }
}

const NewsArticle = ({ article }: { article: Article }) => {
  let pageLink = null
  if (typeof window !== "undefined") {
    pageLink = `${window.location.href}`
  }

  return (
    <div className={styles.container}>
      <div className={styles.articleContainer}>
        <div className={styles.imageContainer}>
          <Img
            className={styles.image}
            fluid={article.frontmatter.image.childImageSharp.fluid}
          />
        </div>
        <div className={styles.articleWrapper}>
          <div className={styles.header}>
            <Socials pageLink={pageLink} />
            <div className={styles.publishedDate}>
              {article.frontmatter.date}
            </div>
          </div>
          <h2 className={styles.title}>{article.frontmatter.title}</h2>
          <div
            dangerouslySetInnerHTML={{ __html: article.html }}
            className={styles.bodyContent}
          />
        </div>
      </div>
    </div>
  )
}

export default NewsArticle

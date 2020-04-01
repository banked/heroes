import React, { useRef, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img, { FluidObject } from "gatsby-image"
import classnames from "classnames"
import Masonry from "react-masonry-component"

import * as styles from "./deliverables.module.scss"

const itemsQuery = () =>
  useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fields: { slug: { regex: "/deliverables/" } } }
        sort: {
          fields: [frontmatter___priority, frontmatter___publishedDate]
          order: [DESC, DESC]
        }
      ) {
        edges {
          node {
            frontmatter {
              image {
                id
                childImageSharp {
                  fluid {
                    src
                    aspectRatio
                  }
                }
              }
              title
              quote
              publishedDate
              priority
              videoLink
            }
            html
          }
        }
      }
    }
  `)

interface Item {
  node: {
    frontmatter: {
      title: string
      image: {
        childImageSharp: {
          fluid: FluidObject
        } | null
      }
      videoLink: string | null
      quote: string | null
    }
    html: string
  }
}

const basicTile = (data: Item) => (
  <div className={classnames(styles.tile, styles.basic)}>
    {data.node.frontmatter.image && (
      <Img fluid={data.node.frontmatter.image.childImageSharp?.fluid} />
    )}
    <div className={styles.innerTile}>
      {data.node.frontmatter.image && <div className={styles.image}></div>}
      <h6 className={styles.heading}>{data.node.frontmatter.title}</h6>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: data.node.html }}
      ></div>
    </div>
  </div>
)

const videoTile = (data: Item) => (
  <div className={classnames(styles.tile, styles.video)}>
    <div className={styles.videoInnerWrapper}>
      <iframe
        src={
          data.node.frontmatter.videoLink
            ? `https://player.vimeo.com/video/${data.node.frontmatter.videoLink}`
            : ""
        }
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
      ></iframe>
    </div>
    <div className={styles.innerTile}>
      <h6 className={styles.heading}>{data.node.frontmatter.title}</h6>
    </div>
  </div>
)

const quoteTile = (data: Item) => (
  <div className={classnames(styles.tile, styles.quote)}>
    <div className={styles.innerTile}>
      <p className={styles.quoteString}>{data.node.frontmatter.quote}</p>
      <p className={styles.person}>{data.node.frontmatter.title}</p>
    </div>
  </div>
)

const Deliverables = () => {
  const [showContent, setShowContent] = useState<boolean>(false)
  const ref = useRef(null)
  const rawItems = itemsQuery()
  const items = rawItems.allMarkdownRemark.edges

  return (
    <div ref={ref} className={styles.container}>
      <h1 className={styles.title}>What We Have Delivered</h1>
      <h4 className={styles.byline}>
        We've been blown away by the support and enthusiasm to date, and have
        already delivered meals, and masks to hospitals, with plenty more to
        come.
      </h4>
      <Masonry
        options={{ transitionDuration: 0 }}
        onLayoutComplete={() => setShowContent(true)}
        className={classnames(
          styles.masonry,
          showContent ? styles.showContent : ""
        )}
      >
        {items.map((item: Item) => {
          if (item.node.frontmatter.quote) {
            return quoteTile(item)
          } else if (item.node.frontmatter.videoLink) {
            return videoTile(item)
          } else if (item.node.html) {
            return basicTile(item)
          }
          return null
        })}
      </Masonry>
    </div>
  )
}

export default Deliverables

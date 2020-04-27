import React, { useRef, useState, useEffect } from "react"
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
      {data.node.html && (
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: data.node.html }}
        ></div>
      )}
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

const Deliverables = ({
  title,
  byline,
  loadMore = false,
}: {
  title: string
  byline?: string
  loadMore?: boolean
}) => {
  const allItems = itemsQuery().allMarkdownRemark.edges
  const reducedItems = allItems.slice(0, 4)
  const [showContent, setShowContent] = useState<boolean>(false)
  const [extraContentActive, setExtraContentActive] = useState<boolean>(
    !loadMore
  )
  const [activeItems, setActiveItems] = useState(
    !loadMore ? allItems : reducedItems
  )
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setActiveItems(extraContentActive ? allItems : reducedItems)
  }, [extraContentActive])

  return (
    <div ref={ref} className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      {byline && <h4 className={styles.byline}>{byline}</h4>}
      <Masonry
        options={{ transitionDuration: 0 }}
        onLayoutComplete={() => setShowContent(true)}
        className={classnames(
          styles.masonry,
          showContent ? styles.showContent : ""
        )}
      >
        {activeItems.map((item: Item) => {
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
      <div className={styles.buttonContainer}>
        <button
          onClick={() => setExtraContentActive(true)}
          className={classnames(
            styles.loadMore,
            extraContentActive ? styles.hidden : null
          )}
        >
          Load More
        </button>
      </div>
    </div>
  )
}

export default Deliverables

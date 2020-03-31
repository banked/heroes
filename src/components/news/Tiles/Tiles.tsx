import * as React from "react"
import * as styles from "./tiles.module.scss"
import classnames from "classnames"
import { useStaticQuery, graphql, Link } from "gatsby"
import { FluidObject } from "gatsby-image"
import Img from "gatsby-image"
import slugify from "../../../utils/slugify"

type Item = {
  node: {
    excerpt: string
    frontmatter: {
      title: string
      minutes: number
      date: Date
      image: {
        childImageSharp: {
          fluid: FluidObject
        }
      }
    }
    fields: {
      slug: string
    }
  }
}

const Tiles = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fields: { slug: { regex: "/blogs/" } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            excerpt(pruneLength: 180)
            frontmatter {
              title
              minutes
              date
              image {
                childImageSharp {
                  fluid(maxWidth: 840) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  // Data needs to be split into 3 sections
  // Most recent item will appear with image, details and excerpt
  // Next two most recent will have an image and details
  // Rest of the items will have only details

  const items = data.allMarkdownRemark.edges
  const mainItem = items[0]
  const secondaryItems = items.slice(1, 3)
  const otherItems = items.slice(3)

  const MainItemComponent = () => (
    <Link
      to={`/news/${slugify(mainItem.node.frontmatter.title)}`}
      className={classnames(styles.mainItemContainer, styles.tileWrapper)}
    >
      <div className={styles.image}>
        <div className={styles.scalingContainer}>
          <Img fluid={mainItem.node.frontmatter.image.childImageSharp.fluid} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.innerContent}>
          <h4 className={styles.itemHeading}>
            {mainItem.node.frontmatter.title}
          </h4>
          <p className={styles.textContent}>{mainItem.node.excerpt}</p>
          <span className={styles.minutes}>
            {mainItem.node.frontmatter.minutes} min read
          </span>
        </div>
      </div>
    </Link>
  )

  const SecondaryItemComponents = () =>
    secondaryItems.map((item: Item) => (
      <Link
        to={`/news/${slugify(item.node.frontmatter.title)}`}
        key={item.node.frontmatter.title}
        className={classnames(styles.itemContainer, styles.tileWrapper)}
      >
        <div className={styles.image}>
          <div className={styles.scalingContainer}>
            <Img fluid={item.node.frontmatter.image.childImageSharp.fluid} />
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.innerContent}>
            <div className={styles.itemHeading}>
              {item.node.frontmatter.title}
            </div>
            <span className={styles.minutes}>
              {item.node.frontmatter.minutes} min read
            </span>
          </div>
        </div>
      </Link>
    ))

  const OtherItemComponents = () =>
    otherItems.map((item: Item) => (
      <Link
        to={`/news/${slugify(item.node.frontmatter.title)}`}
        key={item.node.frontmatter.title}
        className={classnames(styles.itemContainer, styles.tileWrapper)}
      >
        <div className={styles.innerContent}>
          <div className={styles.itemHeading}>
            {item.node.frontmatter.title}
          </div>
          <span className={styles.minutes}>
            {item.node.frontmatter.minutes} min read
          </span>
        </div>
      </Link>
    ))

  return (
    <div className={styles.container}>
      <MainItemComponent />
      <div className={styles.secondaryItemsContainer}>
        <SecondaryItemComponents />
      </div>
      <div className={styles.otherItemsContainer}>
        <OtherItemComponents />
      </div>
    </div>
  )
}

export default Tiles

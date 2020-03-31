import React from "react"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import BasicPage from "../BasicPage"
import NewsArticle from "../../components/news/NewsArticle"
import { Article } from "../../components/news/NewsArticle/NewsArticle"
import { graphql } from "gatsby"

const NewsItemPage = ({ data }: { data: { markdownRemark: Article } }) => {
  const article = data.markdownRemark
  return (
    <Layout>
      <SEO title="News" />
      <BasicPage>
        <NewsArticle article={article} />
      </BasicPage>
    </Layout>
  )
}

export const query = graphql`
  query NewsArticle($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "D MMMM YYYY")
        title
        image {
          childImageSharp {
            fluid(maxWidth: 1320) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default NewsItemPage

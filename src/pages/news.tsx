import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import BasicPage from "../templates/BasicPage"
import Tiles from "../components/news/Tiles"

const NewsPage = () => {
  return (
    <Layout>
      <SEO title="News" />
      <BasicPage>
        <Tiles />
      </BasicPage>
    </Layout>
  )
}

export default NewsPage

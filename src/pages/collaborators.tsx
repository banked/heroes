import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import BasicPage from "../templates/BasicPage"
import Partners from "../components/partners/Partners"

const NewsPage = () => {
  return (
    <Layout>
      <SEO title="Collaborators" />
      <BasicPage>
        <Partners />
      </BasicPage>
    </Layout>
  )
}

export default NewsPage

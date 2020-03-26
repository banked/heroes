import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import BasicPage from "../templates/BasicPage"
import Ambassadors from "../components/ambassadors/Ambassadors"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Ambassadors" />
      <BasicPage>
        <Ambassadors />
      </BasicPage>
    </Layout>
  )
}

export default IndexPage

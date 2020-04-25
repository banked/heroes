import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import BasicPage from "../templates/BasicPage"
import Beneficiaries from "../components/beneficiaries/Beneficiaries"

const NewsPage = () => {
  return (
    <Layout>
      <SEO title="Beneficiaries" />
      <BasicPage>
        <Beneficiaries />
      </BasicPage>
    </Layout>
  )
}

export default NewsPage

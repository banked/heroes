import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import BasicPage from "../templates/BasicPage"
import Hero from "../components/index/Hero"

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Home"
        description="Help them, help us. Donate today to support, in big and small ways, the welfare and wellbeing of NHS staff as they fight COVID-19"
      />
      <BasicPage>
        <Hero />
      </BasicPage>
    </Layout>
  )
}

export default IndexPage

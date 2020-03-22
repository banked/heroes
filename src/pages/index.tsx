import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
// import Hero from "../components/index/Hero"
// import Global from "../components/index/Global"
import BasicPage from "../templates/BasicPage"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <BasicPage>{/* <Hero />
        <Global /> */}</BasicPage>
    </Layout>
  )
}

export default IndexPage

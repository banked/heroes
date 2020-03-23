import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import BasicPage from "../templates/BasicPage"
import AboutUs from "../components/aboutUs/AboutUs"

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="About Us"
        description="We've come together for one reason: we love our NHS. We are doctors, musicians, technologists, students, and artists."
      />
      <BasicPage>
        <AboutUs />
      </BasicPage>
    </Layout>
  )
}

export default IndexPage

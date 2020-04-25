import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import BasicPage from "../templates/BasicPage"
import Heading from "../components/shared/Heading"
import PrivacyPolicy from "../components/privacy-policy/PrivacyPolicy"

const AboutUsPage = () => {
  return (
    <Layout>
      <SEO title="About Us" />
      <BasicPage>
        <Heading title="Privacy" />
        <PrivacyPolicy />
      </BasicPage>
    </Layout>
  )
}

export default AboutUsPage

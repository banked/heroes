import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import BasicPage from "../templates/BasicPage"
import Videos from "../components/about/Videos"
import Heading from "../components/shared/Heading"
import ActionsAndServices from "../components/about/ActionsAndServices"
import TestimonialsPreview from "../components/about/TestimonialsPreview"

const AboutUsPage = () => {
  return (
    <Layout>
      <SEO title="About Us" />
      <BasicPage>
        <Heading
          title="About Us"
          byline="HEROES is committed to the singular mission of protecting the welfare and wellbeing of NHS workers, from physical to mental health to day-to-day necessities."
        />
        <Videos />
        <ActionsAndServices />
        <TestimonialsPreview />
      </BasicPage>
    </Layout>
  )
}

export default AboutUsPage

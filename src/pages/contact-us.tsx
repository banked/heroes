import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import BasicPage from "../templates/BasicPage"
import ContactUs from "../components/contactUs/ContactUs"

const ContactUsPage = () => {
  return (
    <Layout>
      <SEO title="Contact Us" />
      <BasicPage>
        <ContactUs />
      </BasicPage>
    </Layout>
  )
}

export default ContactUsPage

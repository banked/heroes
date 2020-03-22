import * as React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import BasicPage from "../templates/BasicPage"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Page Not Found" />
    <BasicPage>{}</BasicPage>
  </Layout>
)

export default NotFoundPage

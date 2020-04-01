import * as React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import BasicPage from "../templates/BasicPage"
import PageNotFound from "../components/pageNotFound/PageNotFound"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Page Not Found" />
    <BasicPage>
      <PageNotFound />
    </BasicPage>
  </Layout>
)

export default NotFoundPage

import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import BasicPage from "../templates/BasicPage"
import Deliverables from "../components/deliverables/Deliverables"

const DeliverablesPage = () => {
  return (
    <Layout>
      <SEO title="Contact Us" />
      <BasicPage>
        <Deliverables />
      </BasicPage>
    </Layout>
  )
}

export default DeliverablesPage

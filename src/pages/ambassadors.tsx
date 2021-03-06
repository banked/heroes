import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import BasicPage from "../templates/BasicPage"
import Ambassadors from "../components/ambassadors/Ambassadors"

const AmbassadorsPage = () => {
  return (
    <Layout>
      <SEO title="Ambassadors" />
      <BasicPage>
        <Ambassadors />
      </BasicPage>
    </Layout>
  )
}

export default AmbassadorsPage

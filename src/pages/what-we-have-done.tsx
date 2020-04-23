import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import BasicPage from "../templates/BasicPage"
import Deliverables from "../components/deliverables/Deliverables"

const title = `What We've Done`
const byline = `We've been blown away by the support and enthusiasm to date, and have already delivered meals, and masks to hospitals, with plenty more to come.`

const DeliverablesPage = () => {
  return (
    <Layout>
      <SEO title="Contact Us" />
      <BasicPage>
        <Deliverables title={title} byline={byline} />
      </BasicPage>
    </Layout>
  )
}

export default DeliverablesPage

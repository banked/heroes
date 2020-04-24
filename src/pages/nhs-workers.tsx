import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import BasicPage from "../templates/BasicPage"
import ForNHSWorkers from "../components/nhsWorkers/ForNHSWorkers"
import Clinicians from "../components/nhsWorkers/Clinicians"

const NHSWorkersPage = () => {
  return (
    <Layout>
      <SEO title="NHS Workers" />
      <BasicPage>
        <ForNHSWorkers />
        <Clinicians />
      </BasicPage>
    </Layout>
  )
}

export default NHSWorkersPage

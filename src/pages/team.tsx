import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import BasicPage from "../templates/BasicPage"
import Team from "../components/team/Team"

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Team"
        description="We've come together for one reason: we love our NHS. We are doctors, musicians, technologists, students, and artists."
      />
      <BasicPage>
        <Team />
      </BasicPage>
    </Layout>
  )
}

export default IndexPage

import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import BasicPage from "../templates/BasicPage"
import ComingSoonPage from "../components/shared/ComingSoon"
import { Details } from "../components/shared/ComingSoon/ComingSoon"

import foodIcon from "../images/food_icon.svg"

const details: Details = {
  title: "Grants & Financial Aid",
  byline:
    "We provide a hassle-free small grants service for NHS workers in hardship due to COVID-19. For childcare, transport, accommodation or other.",
  applyFor: "Grants",
  icon: foodIcon,
  link: "#",
}

const GrantsAndFinancialAidPage = () => {
  return (
    <Layout>
      <SEO title="Grants and Financial Aid" />
      <BasicPage>
        <ComingSoonPage details={details} />
      </BasicPage>
    </Layout>
  )
}

export default GrantsAndFinancialAidPage

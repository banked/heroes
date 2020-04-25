import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import BasicPage from "../templates/BasicPage"
import ComingSoonPage from "../components/shared/ComingSoon"
import { Details } from "../components/shared/ComingSoon/ComingSoon"

import foodIcon from "../images/food_icon.svg"

const details: Details = {
  title: "Grants",
  byline:
    "We provide a hassle-free small grants service for NHS workers to help with additional costs incurred due to COVID-19. For childcare, transport, accommodation or other.",
  applyFor: "Grants",
  applyByline:
    "We are currently focussed on working with partners to deliver food and transport directly with a discount code for HEROES membership up to the value of £50.",
  icon: foodIcon,
  basicContent: {
    website: "/HEROES-Application-for-Grant.pdf",
  },
}

const GrantsAndFinancialAidPage = () => {
  return (
    <Layout>
      <SEO title="Grants" />
      <BasicPage>
        <ComingSoonPage details={details} />
      </BasicPage>
    </Layout>
  )
}

export default GrantsAndFinancialAidPage

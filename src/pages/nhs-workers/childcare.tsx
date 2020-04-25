import React from "react"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import BasicPage from "../../templates/BasicPage"
import ComingSoonPage from "../../components/shared/ComingSoon"
import { Details } from "../../components/shared/ComingSoon/ComingSoon"

import foodIcon from "../../images/food_icon.svg"

const details: Details = {
  title: "Childcare",
  byline:
    "NHS workers will struggle to balance their professional commitments with their families. HEROES is committed to supporting childcare requirements, working with generous services and providing small grants to cover childcare costs.",
  applyFor: "Childcare Grant",
  applyByline:
    "HEROES have collaborated with one of the country’s largest childcare providers to help NHS workers find volunteer childcare. This exciting collaboration will be announced shortly.",
  icon: foodIcon,
  basicContent: {
    website: "/grants-and-financial-assistance",
  },
}

const GrantsAndFinancialAidPage = () => {
  return (
    <Layout>
      <SEO title="Childcare" />
      <BasicPage>
        <ComingSoonPage details={details} />
      </BasicPage>
    </Layout>
  )
}

export default GrantsAndFinancialAidPage

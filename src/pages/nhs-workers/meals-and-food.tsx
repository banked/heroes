import React from "react"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import BasicPage from "../../templates/BasicPage"
import ComingSoonPage from "../../components/shared/ComingSoon"
import { Details } from "../../components/shared/ComingSoon/ComingSoon"

import food from "../../images/forNHSWorkers/food.png"

const details: Details = {
  title: "Food",
  byline:
    "With supermarkets reducing times and increasing social distancing, coffee shops and cafes closed, NHS workers at work or at home, need food. HEROES are here to help.",
  applyFor: "Food",
  applyByline:
    "HEROES regularly deliver hot food from restaurants and super-chefs to hospitals, GPs and hospices all around the country. If you would like to get some food in your place of work join our Healthcare HEROES Network.",
  icon: food,
  basicContent: {
    website: "https://forms.gle/UDBDXTVN4Nm24Qpj9",
    buttonText: "Join Heroes Network Form",
  },
}

const GrantsAndFinancialAidPage = () => {
  return (
    <Layout>
      <SEO title="Meals" />
      <BasicPage>
        <ComingSoonPage details={details} />
      </BasicPage>
    </Layout>
  )
}

export default GrantsAndFinancialAidPage

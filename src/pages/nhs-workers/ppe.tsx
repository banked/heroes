import React from "react"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import BasicPage from "../../templates/BasicPage"
import ComingSoonPage from "../../components/shared/ComingSoon"
import { Details } from "../../components/shared/ComingSoon/ComingSoon"

import foodIcon from "../../images/food_icon.svg"

const details: Details = {
  title: "Personal Protective Equipment",
  byline:
    "We are augmenting the government response by procuring masks, gowns, visors, and sanitizer from anywhere possible, including making our own.",
  applyFor: "PPE",
  applyByline:
    "HEROES is a leading member of the SHIELD umbrella organization, made up of industry expert groups and clinicians, sourcing personal protective equipment from around the world and manufacturing here in the UK. Our network as part of SHIELD includes two 3D Printing Hubs, one in London (Makerversity) and a second in Huddersfield (National 3D Printing Society). We utilise a national logistics network at the NEAD.com. We source from industry, work with the cabinet to buy in bulk from abroad, and fund local manufacturing in the UK.",
  icon: foodIcon,
  customContent: (
    <>
      <p>
        If you can DONATE any personal protective equipment, please contact{" "}
        <a href="mailto:donate@theNEAD.com">donate@theNEAD.com</a>
      </p>
      <p>
        If you NEED any personal protective equipment, please contact{" "}
        <a href="mailto:appeal@theNEAD.com">appeal@theNEAD.com</a>
      </p>
    </>
  ),
}

const GrantsAndFinancialAidPage = () => {
  return (
    <Layout>
      <SEO title="PPE" />
      <BasicPage>
        <ComingSoonPage details={details} />
      </BasicPage>
    </Layout>
  )
}

export default GrantsAndFinancialAidPage

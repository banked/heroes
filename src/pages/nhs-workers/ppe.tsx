import React from "react"
import paragraphLink from "../../utils/paragraphLink"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import BasicPage from "../../templates/BasicPage"
import ComingSoonPage from "../../components/shared/ComingSoon"
import { Details } from "../../components/shared/ComingSoon/ComingSoon"

import ppe from "../../images/forNHSWorkers/ppe.png"

const details: Details = {
  title: "Personal Protective Equipment",
  byline:
    "We are augmenting the government response by procuring masks, gowns, visors, and sanitizer from anywhere possible, including funding manufacturing and novel innovative solutions to the PPE shortage.",
  applyFor: "PPE",
  applyByline: (
    <p>
      HEROES is a leading funder of the SHIELD umbrella organization, made up of
      industry expert groups and clinicians, sourcing personal protective
      equipment from around the world and manufacturing here in the UK. Our
      network as part of SHIELD includes two 3D Printing Hubs, one in London
      (Makerversity) and a second in Corby (National 3D Printing Society). We
      utilise a national logistics network at{" "}
      {paragraphLink("https://www.theNEAD.co.uk", "www.theNEAD.co.uk")}. We
      source from industry, work with the cabinet to buy in bulk from abroad,
      and fund local manufacturing in the UK.
    </p>
  ),
  icon: ppe,
  customContent: (
    <>
      <p>
        If you can DONATE any personal protective equipment, please contact{" "}
        <a href="mailto:donate@theNEAD.co.uk">donate@theNEAD.co.uk</a>
      </p>
      <p>
        If you NEED any personal protective equipment, please contact{" "}
        <a href="mailto:appeal@theNEAD.co.uk">appeal@theNEAD.co.uk</a>
      </p>
      <p>
        HEROES does not produce, manufacture or distribute PPE and has no
        liability to any third party for the production, manufacturing or
        distribution of PPE by any organisation which HEROES funds.
      </p>
      <p>
        Find out more about SHIELD{" "}
        <a
          href="https://www.shieldcollaborative.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
      </p>
    </>
  ),
}

const PPEPage = () => {
  return (
    <Layout>
      <SEO title="PPE" />
      <BasicPage>
        <ComingSoonPage details={details} />
      </BasicPage>
    </Layout>
  )
}

export default PPEPage

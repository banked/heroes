import React from "react"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import BasicPage from "../../templates/BasicPage"
import ComingSoonPage from "../../components/shared/ComingSoon"
import { Details } from "../../components/shared/ComingSoon/ComingSoon"

import childcare from "../../images/forNHSWorkers/childcare.png"
import { Link } from "gatsby"

const details: Details = {
  title: "Childcare",
  byline:
    "HEROES have collaborated with the country’s largest childcare provider, childcare.co.uk, to provide free at the point of use childcare services for NHS workers, and to provide the ability for NHS workers to co-op and provide childcare for each other if possible.",
  applyFor: "Childcare Support",
  applyByline: "",
  icon: childcare,
  customContent: (
    <>
      <div>
        <span>
          To help cover the costs, HEROES members can apply for a small grant up
          to £1500 specifically for childcare. To find out more visit please
          visit the grants page.
        </span>
        <Link to="/grants-and-financial-assistance">
          <button>Grants Page</button>
        </Link>
      </div>
      <div>
        <span>
          Access childcare services through{" "}
          <a
            href="http://childcare.co.uk"
            target="_blank"
            rel="noopener noreferrer"
          >
            childcare.co.uk
          </a>
          . Details about this exciting collaboration will be announced shortly.
        </span>
        <a href="#">
          <button>Coming Soon</button>
        </a>
      </div>
    </>
  ),
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

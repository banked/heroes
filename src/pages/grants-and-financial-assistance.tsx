import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import BasicPage from "../templates/BasicPage"
import ComingSoonPage from "../components/shared/ComingSoon"
import { Details } from "../components/shared/ComingSoon/ComingSoon"

import grants from "../images/forNHSWorkers/grants.png"

const details: Details = {
  title: "Grants",
  byline:
    "We are immensely proud to offer a support grants fund of £150,000 for NHS workers to help with additional costs incurred due to COVID-19. For childcare, transport, accommodation or other.",
  applyFor: "Grants",
  applyByline:
    "Apply for a support grant if you have been adversely affected by the COVID-19 crisis as an NHS worker. Fill in the PDF and follow the instructions to make an application. All grants will be assessed on genuine need and will require additional ID verification. In the pilot phase applications will be capped at 50 in the first batch.",
  icon: grants,
  customContent: (
    <>
      <div>
        <section>
          <span>
            Please send completed forms to{" "}
            <a href="mailto:grants@helpthemhelpus.co.uk">
              grants@helpthemhelpus.co.uk
            </a>{" "}
            ensuring you include the following in your email:
          </span>
          <ul>
            <li>Completed Grant Application Form</li>
            <li>
              Copy of your NHS Security Pass (photocopy or picture from your
              smartphone will suffice)
            </li>
            <li>
              NHS email address (if you're sending the email from an alternative
              address)
            </li>
          </ul>
          <span>
            We aim to process grant applications within 48-hours however this is
            subject to demand so we kindly ask for your patience.
          </span>
        </section>
        <a
          href="/HEROES-Application-for-Grant.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Open PDF</button>
        </a>
      </div>
    </>
  ),
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

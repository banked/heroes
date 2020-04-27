import React from "react"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import BasicPage from "../../templates/BasicPage"
import ComingSoonPage from "../../components/shared/ComingSoon"
import { Details } from "../../components/shared/ComingSoon/ComingSoon"

import counselling from "../../images/forNHSWorkers/counselling.png"

const details: Details = {
  title: "Counselling Therapy",
  byline:
    "NHS workers respond to the COVID-19 crisis will be under incredible strain. There are a. range of resources available to help here",
  applyFor: "Counselling Therapy",
  applyByline: "",
  icon: counselling,
  customContent: (
    <>
      <div>
        <span>
          A National Hub of resources for all staff groups, verified on-site for
          NHS workers.
        </span>
        <a
          href="https://www.practitionerhealth.nhs.uk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>View Link</button>
        </a>
      </div>
      <div>
        <span>
          We have partnered with HarleyTherapy to provide up to 600 free 1-to-1
          counselling sessions each week. Simply click the link and join the
          session.
        </span>
        <a
          href="https://www.harleytherapy.com/nhs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>View Link</button>
        </a>
      </div>
      <div>
        <span>
          Our partner and beneficiary, the British Medical Association, provide
          a BMA Wellbeing Service service for all specific to doctors and
          medical students, regardless of membership.
        </span>
        <a
          href="https://www.bma.org.uk/advice-and-support/your-wellbeing/wellbeing-support-services/counselling-and-peer-support-for-doctors-and-medical-students"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>View Link</button>
        </a>
      </div>
      <div>
        <span>
          General counselling resources freely available to public and NHS staff
          alike can be found in this table:
        </span>
        <a
          href="/Counselling_services.xlsx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Download</button>
        </a>
      </div>
    </>
  ),
}

const GrantsAndFinancialAidPage = () => {
  return (
    <Layout>
      <SEO title="Counselling" />
      <BasicPage>
        <ComingSoonPage details={details} />
      </BasicPage>
    </Layout>
  )
}

export default GrantsAndFinancialAidPage

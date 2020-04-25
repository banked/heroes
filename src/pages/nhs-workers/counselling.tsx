import React from "react"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import BasicPage from "../../templates/BasicPage"
import ComingSoonPage from "../../components/shared/ComingSoon"
import { Details } from "../../components/shared/ComingSoon/ComingSoon"

import foodIcon from "../../images/food_icon.svg"

const details: Details = {
  title: "Counselling Therapy",
  byline:
    "NHS workers respond to the COVID-19 crisis will be under incredible strain. There are a. range of resources available to help here",
  applyFor: "Counselling Therapy",
  applyByline: "",
  icon: foodIcon,
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
          Partnered with HEROES, HarleyTherapy offers free professional therapy
          sessions for NHS workers.
        </span>
        <a
          href="http://www.harleytherapy.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>View Link</button>
        </a>
      </div>
      <div>
        <span>
          Our partner and beneficiary, the British Medical Association, provide
          a BMA Wellbeing Service service forall specific to doctors and medical
          students, regardless of membership.
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
          A National Hub of resorces for all staff groups, verified on-site for
          NHS workers
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

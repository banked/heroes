import React from "react"

import * as styles from "./beneficiaries.module.scss"

const Beneficiaries = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Beneficiaries</h1>
      <h4 className={styles.byline}>
        HEROES has partnered with BMA Giving to provide reciprocal relief for
        frontline NHS workers through their charitable giving committee. We also
        work together to provide resources for medical students and doctors in
        hardship, such as counselling and funding. We are proud to host BMA
        representative advisors on our advisory committee.
      </h4>
      <div className={styles.buttonContainer}>
        <a
          href="https://www.bma.org.uk/about-us/corporate-social-environmental-responsibility/cser/our-charitable-and-community-work#heading_ad36034b9e4649e3b298e1fc73570d0e"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={styles.button}>BMA Giving Website</button>
        </a>
      </div>
    </div>
  )
}

export default Beneficiaries

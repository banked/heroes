import React from "react"

import * as styles from "./testimonialsPreview.module.scss"
import { Link } from "gatsby"

const TestimonialsPreview = () => {
  return (
    <div className={styles.container}>
      <div className={styles.linkContainer}>
        <h4 className={styles.title}>How do we know who to give money to?</h4>
        <Link to="/what-we-have-done">
          <button className={styles.button}>Testimonials</button>
        </Link>
      </div>
      <p className={styles.description}>
        For small grants and other services we verify NHS workers via{" "}
        <a href="https://www.nhs.net" target="_blank" rel="noopener noreferrer">
          nhs.net
        </a>{" "}
        or trust email. For larger grants, NHS workers are verified with a
        two-step process, including secure email and identification verification
        via an independent app. Once confirmed as NHS workers, support grants
        are awarded for specific needs - childcare, accommodation, or travel,
        due to hardship created by COVID-19. We can deliver funds to a single
        member only once per funding cycle.
      </p>
    </div>
  )
}

export default TestimonialsPreview

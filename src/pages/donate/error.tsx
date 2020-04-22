import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/donate/Layout"


import * as styles from "../../components/donate/shared.module.scss";

import { renderStatic } from "react-helmet"


const DonateSuccessPage = () => {

    return (
      <Layout>
        <div className={styles.layout}>
          <h2>Payment Failed</h2>
          <p>Unfortunately we were not able to proccess your donation.</p>
          <p>Please try again.</p>

          <Link className={styles.button} to='/donate' >Go Back</Link>
        </div>
      </Layout>
    )

}

export default DonateSuccessPage

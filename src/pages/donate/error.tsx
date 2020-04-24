import React from "react"
import { Link } from "gatsby"
import classnames from "classnames"

import Layout from "../../components/donate/Layout"


import * as sharedStyles from "../../components/donate/shared.module.scss";

import { renderStatic } from "react-helmet"


const DonateSuccessPage = () => {

    return (
      <Layout>
        <div className={sharedStyles.layout}>
          <div className={sharedStyles.errorText}>
            <h2>Payment Failed</h2>
            <p>Unfortunately we were not able to proccess your donation.</p>
            <p>Please try again.</p>
          </div>
          <Link className={classnames(sharedStyles.button, sharedStyles.buttonEnabled)} to='/donate' >Go Back</Link>
        </div>
      </Layout>
    )

}

export default DonateSuccessPage

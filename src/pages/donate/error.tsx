import React from "react"
// import { Link } from "gatsby"

import Layout from "../../components/donate/Layout"


import * as styles from "../../components/donate/shared.module.scss";

import { renderStatic } from "react-helmet"


const DonateSuccessPage = () => {

    return (
      <Layout>
        <h2>Payment Failed</h2>
      </Layout>
    )

}

export default DonateSuccessPage

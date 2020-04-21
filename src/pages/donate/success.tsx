import React from "react"
// import { Link } from "gatsby"

import Layout from "../../components/donate/Layout"

import Twitter from "../../images/socialIcons/twitter.inline.svg"
import Facebook from "../../images/socialIcons/facebook.inline.svg"
import LinkedIn from "../../images/socialIcons/linkedin.inline.svg"

import * as styles from "../../components/donate/shared.module.scss";

import { renderStatic } from "react-helmet"


const DonateSuccessPage = () => {

    return (
      <Layout>
        <h2>Payment Successful!</h2>
        <p>A big thank you from everyone at Heroes.

Please follow us on social, and share with friends &amp; family.

Stay Safe.</p>

<Twitter className={styles.social}/>
<Facebook className={styles.social}/>

<LinkedIn className={styles.social}/>

      </Layout>
    )

}

export default DonateSuccessPage

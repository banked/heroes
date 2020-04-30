import React from "react"
// import { Link } from "gatsby"

import Layout from "../../components/donate/Layout"
import Donate from "../../components/donate/Donate"
import { renderStatic } from "react-helmet"


const DonatePage = () => {

    return (
      <Layout>
        <Donate/>
      </Layout>
    )

}

export default DonatePage

import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/Layout"
import DontationAmount from "../components/donate/DonationAmount"


const DonatePage = () => {
  return (
    <Layout>
      <h2>How much would you like to donate?</h2>
        <DontationAmount/>
      <h2>Enter your details</h2>

      <h2>How would you like to pay?</h2>
    </Layout>
  )
}

export default DonatePage

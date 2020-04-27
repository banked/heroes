import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import BasicPage from "../templates/BasicPage"
import Hero from "../components/index/Hero"
import Featured from "../components/index/Featured"
import NHSWorkers from "../components/index/NHSWorkers"
import ArtForHeroes from "../components/index/ArtForHeroes"
import Deliverables from "../components/deliverables/Deliverables"
import MobileWhatWeveDone from "../components/index/MobileWhatWeveDone"
import StayInformed from "../components/index/StayInformed"

const IndexPage = () => {
  return (
    <Layout>
      <SEO description="Help them, help us. Donate today to support, in big and small ways, the welfare and wellbeing of NHS staff as they fight COVID-19" />
      <BasicPage whiteHeader={true}>
        <Hero />
        <Featured />
        <MobileWhatWeveDone />
        <NHSWorkers />
        <StayInformed />
        <ArtForHeroes />
        <Deliverables title="Latest Updates" loadMore={true} />
      </BasicPage>
    </Layout>
  )
}

export default IndexPage

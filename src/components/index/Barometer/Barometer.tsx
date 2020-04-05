import React, { useState, useRef, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as styles from "./barometer.module.scss"

const itemsQuery = () =>
  useStaticQuery(graphql`
    query {
      siteInformationYaml {
        amountRaised
      }
    }
  `)

const Barometer = () => {
  const amountRaised = itemsQuery().siteInformationYaml.amountRaised
  const target = 1000000
  const barometerMaxHeight = 284

  const [barometerHeight, setBarometerHeight] = useState<number>(0)
  const barometerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const percentRaised = amountRaised / target
    const pixelHeight = Math.round(barometerMaxHeight * percentRaised)
    barometerRef.current?.setAttribute("style", `height: ${pixelHeight}px`)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.barometer}>
          <div className={styles.backgroundRectangle}></div>
          <div className={styles.oval}></div>
          <div ref={barometerRef} className={styles.rectangle}></div>
        </div>
        <div className={styles.content}>
          <h6 className={styles.amount}>
            {new Intl.NumberFormat("en-GB", {
              style: "currency",
              currency: "GBP",
              maximumFractionDigits: 2,
            })
              .format(amountRaised)
              .replace(/\.00/g, "")}
          </h6>
          <p className={styles.target}>raised of £1,000,000 target</p>
          <p className={styles.description}>
            This is a total of the Gofundme money raised and direct money
            donated to the foundation.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Barometer

import React, { useRef, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as styles from "./barometer.module.scss"

const itemsQuery = () =>
  useStaticQuery(graphql`
    query {
      siteInformationYaml {
        amountRaised
        target
        description
      }
    }
  `)

const Barometer = () => {
  const data = itemsQuery()
  const amountRaised = data.siteInformationYaml.amountRaised
  const target = data.siteInformationYaml.target
  const barometerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const percentRaised = amountRaised / target
    const percentWidth = Math.round(percentRaised * 100)
    barometerRef.current?.setAttribute("style", `width: ${percentWidth}%`)
  }, [amountRaised])

  return (
    <div className={styles.container}>
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
        <p className={styles.target}>
          raised of{" "}
          {new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
            maximumFractionDigits: 2,
          })
            .format(target)
            .replace(/\.00/g, "")}{" "}
          target
        </p>
      </div>
      <div className={styles.barometer}>
        <div className={styles.backgroundRectangle}></div>
        <div ref={barometerRef} className={styles.rectangle}></div>
      </div>
      {/* <p className={styles.description}>
          {data.siteInformationYaml.description}
        </p> */}
    </div>
  )
}

export default Barometer

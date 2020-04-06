import React, { useState, useRef, useEffect } from "react"
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
  const barometerMaxHeight = 284

  const [displayValue, setDisplayValue] = useState<number>(amountRaised)
  const [barometerActive, setBarometerActive] = useState<boolean>(false)
  const barometerRef = useRef<HTMLDivElement>(null)
  const valueRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (barometerActive && displayValue === amountRaised) {
      // assumes integer values for start and end
      const duration = 1000
      // no timer shorter than 50ms (not really visible any way)
      const minTimer = 50
      // calc step time to show all interediate values
      let stepTime = Math.abs(Math.floor(duration / amountRaised))

      // never go below minTimer
      stepTime = Math.max(stepTime, minTimer)

      // get current time and calculate desired end time
      const startTime = new Date().getTime()
      const endTime = startTime + duration
      let timer

      const run = () => {
        const now = new Date().getTime()
        const remaining = Math.max((endTime - now) / duration, 0)
        const value = Math.round(amountRaised - remaining * amountRaised)
        setDisplayValue(value)
        if (value >= amountRaised) {
          clearInterval(timer)
          setDisplayValue(amountRaised)
        }
      }
      timer = setInterval(run, stepTime)
      run()
    }
  }, [barometerActive])

  useEffect(() => {
    const percentRaised = displayValue / target
    const pixelHeight = Math.round(barometerMaxHeight * percentRaised)
    barometerRef.current?.setAttribute("style", `height: ${pixelHeight}px`)
  }, [displayValue])

  return (
    <div
      onMouseEnter={() => setBarometerActive(true)}
      onMouseLeave={() => setBarometerActive(false)}
      className={styles.container}
    >
      <div className={styles.innerContainer}>
        <div className={styles.barometer}>
          <div className={styles.backgroundRectangle}></div>
          <div className={styles.oval}></div>
          <div ref={barometerRef} className={styles.rectangle}></div>
        </div>
        <div className={styles.content}>
          <h6 ref={valueRef} className={styles.amount}>
            {new Intl.NumberFormat("en-GB", {
              style: "currency",
              currency: "GBP",
              maximumFractionDigits: 2,
            })
              .format(displayValue)
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
          <p className={styles.description}>
            {data.siteInformationYaml.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Barometer

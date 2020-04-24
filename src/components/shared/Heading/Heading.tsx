import React, { useState } from "react"

import * as styles from "./heading.module.scss"

const Heading = ({ title, byline }: { title: string; byline: string }) => (
  <div className={styles.container}>
    <h1 className={styles.title}>{title}</h1>
    <p className={styles.byline}>{byline}</p>
  </div>
)

export default Heading

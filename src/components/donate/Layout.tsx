import * as React from "react"

import Layout from "../Layout"
import Logo from "../../images/logoSmall.inline.svg"
import * as styles from "./layout.module.scss"

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout>
      <div className={styles.background}>


      <Logo className={styles.logo}/>

      <div className={styles.wrapper}>
        {children}
      </div>

      </div>
    </Layout>
  )
}

export default layout

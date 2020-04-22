import * as React from "react"
import { Link } from "gatsby"
import Layout from "../Layout"
import Logo from "../../images/logoSmall.inline.svg"
import * as styles from "./layout.module.scss"

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout>
      <div className={styles.background}>

      <Link className={styles.logo} to="/">
        <Logo/>
      </Link>
      <div className={styles.wrapper}>
        {children}
      </div>

      </div>
    </Layout>
  )
}

export default layout

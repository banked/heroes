import * as React from "react"
import * as styles from "./basicPage.module.scss"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

const BasicPage = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.pageContainer}>
    <Header />
    {children}
    <Footer />
  </div>
)

export default BasicPage

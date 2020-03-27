import * as React from "react"
import * as styles from "./homepage.module.scss"
// import Header from "../../components/Header"
// import Footer from "../../components/Footer"

const HomePage = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.pageContainer}>{children}</div>
)

export default HomePage

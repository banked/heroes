import React from "react"
import { Link } from "gatsby"
import classnames from "classnames"
import GofundmeButton from "../index/shared/GofundmeButton"
import PopoutMenu from "./PopoutMenu"
import DropDownMenu from "../shared/DropDownMenu"

import * as styles from "./header.module.scss"

import Logo from "../../images/logo.inline.svg"
import LogoSmall from "../../images/logoSmall.inline.svg"

export const links = [
  {
    displayText: "Ambassadors",
    link: "ambassadors",
  },
  {
    displayText: "Team",
    link: "team",
  },
  {
    displayText: "Partners",
    link: "partners",
  },
  {
    displayText: "What We've Done",
    link: "what-we-have-done",
  },
  {
    displayText: "News",
    link: "news",
  },
  {
    displayText: "Get In Touch",
    link: "contact-us",
  },
]

const Header = ({ homepage = false }: { homepage?: boolean }) => {
  return (
    <div
      className={classnames(
        styles.container,
        homepage ? styles.removePadding : null
      )}
    >
      <div className={styles.desktopContent}>
        <Link className={styles.logoLink} to="/">
          <div className={styles.logoLarge}>
            <Logo />
          </div>
          <div className={styles.logoSmall}>
            <LogoSmall />
          </div>
        </Link>
        <div className={styles.links}>
          <div className={styles.dropdownContainer}>
            <DropDownMenu />
          </div>
          <span className={styles.donateText}>Donate Now</span>
          <GofundmeButton />
        </div>
      </div>
      <div className={styles.popoutContainer}>
        <PopoutMenu links={links} />
      </div>
    </div>
  )
}

export default Header

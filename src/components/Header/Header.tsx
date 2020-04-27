import React from "react"
import { Link } from "gatsby"
import classnames from "classnames"
import PopoutMenu from "./PopoutMenu"

import * as styles from "./header.module.scss"

import Logo from "../../images/logo.inline.svg"
import DropDownMenu from "../shared/DropDownMenu"

export const links = [
  {
    displayText: "Partners",
    link: "partners",
  },
  {
    displayText: "Team",
    link: "team",
  },
  {
    displayText: "Ambassadors",
    link: "ambassadors",
  },
  {
    displayText: "What We've Done",
    link: "what-we-have-done",
  },
  {
    displayText: "Beneficiaries",
    link: "beneficiaries",
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

const Header = ({ whiteHeader = false }: { whiteHeader?: boolean }) => {
  return (
    <div
      className={classnames(
        styles.container,
        whiteHeader ? styles.whiteHeader : null
      )}
    >
      <div className={styles.innerContainer}>
        <div className={styles.desktopContent}>
          <Link className={styles.logoLink} to="/">
            <div className={styles.logoLarge}>
              <Logo />
            </div>
          </Link>
          <div className={styles.links}>
            <DropDownMenu whiteHeader={whiteHeader} />
            {/* {links.map(link => (
              <Link className={styles.link} to={link.link} key={link.link}>
                {link.displayText}
              </Link>
            ))} */}
            <Link to="/nhs-workers">
              <button className={styles.nhsButton}>NHS Workers</button>
            </Link>
            <a
              href="https://www.gofundme.com/f/help-them-help-us"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <button className={styles.donateButton}>Donate</button>
          </div>
          <div className={styles.popoutContainer}>
            <PopoutMenu links={links} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

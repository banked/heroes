import React, { useState } from "react"
import { Link } from "gatsby"
import classnames from "classnames"
import useOutsideClick from "../../../utils/hooks/useOutsideClick"

import * as styles from "./dropDownMenu.module.scss"

import dropDownTriangle from "../../../images/dropDownTriangle.svg"

const DropDownMenu = () => {
  const [hovered, setHovered] = useState<boolean>(false)
  const ref = useOutsideClick(() => setHovered(false))
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setHovered(true)}
      className={styles.container}
    >
      <div
        className={classnames(
          styles.dropDownMenu,
          hovered ? styles.hovered : null
        )}
      >
        <span className={styles.dropDownText}>
          <img className={styles.dropDownIcon} src={dropDownTriangle} alt="" />
          About Us
        </span>
        <div className={styles.headerLinks}>
          <Link className={styles.headerLink} to="/ambassadors">
            Ambassadors
          </Link>
          <Link className={styles.headerLink} to="/team">
            Team
          </Link>
          <Link className={styles.headerLink} to="/contact-us">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DropDownMenu

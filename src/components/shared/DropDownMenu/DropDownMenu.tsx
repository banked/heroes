import React, { useState } from "react"
import { Link } from "gatsby"
import classnames from "classnames"
import useOutsideClick from "../../../utils/hooks/useOutsideClick"
import { links } from "../../Header/Header"

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
          {links.map(link => (
            <Link key={link.link} className={styles.headerLink} to={link.link}>
              {link.displayText}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DropDownMenu

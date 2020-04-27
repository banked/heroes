import React, { useState } from "react"
import { Link } from "gatsby"
import classnames from "classnames"
import useOutsideClick from "../../../utils/hooks/useOutsideClick"
import { links } from "../../Header/Header"

import * as styles from "./dropDownMenu.module.scss"

import DropDownTriangle from "../../../images/dropDownTriangle.inline.svg"

const DropDownMenu = ({ whiteHeader }: { whiteHeader: boolean }) => {
  const [hovered, setHovered] = useState<boolean>(false)
  const ref = useOutsideClick(() => setHovered(false))
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setHovered(true)}
      className={classnames(
        styles.container,
        whiteHeader ? styles.whiteHeader : ""
      )}
    >
      <div
        className={classnames(
          styles.dropDownMenu,
          hovered ? styles.hovered : null
        )}
      >
        <span className={styles.dropDownText}>
          <Link to="/about-us">
            <DropDownTriangle />
            About Us
          </Link>
        </span>
        <div className={styles.headerLinks}>
          {links.map(link => (
            <Link
              key={link.link}
              className={styles.headerLink}
              to={`/${link.link}`}
            >
              {link.displayText}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DropDownMenu

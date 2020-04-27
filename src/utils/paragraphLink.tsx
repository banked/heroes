import React from "react"
import { Link } from "gatsby"

const paragraphLink = (linkLocation: string, text: string) =>
  linkLocation.charAt(0) !== "/" ? (
    <a href={linkLocation} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  ) : (
    <Link to={linkLocation}>{text}</Link>
  )

export default paragraphLink

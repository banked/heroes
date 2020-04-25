import React from "react"
import { Link } from "gatsby"
import { links } from "../Header/Header"

import * as styles from "./footer.module.scss"

import Twitter from "../../images/socialIcons/twitter.inline.svg"
import Instagram from "../../images/socialIcons/instagram.inline.svg"
import Facebook from "../../images/socialIcons/facebook.inline.svg"
import LinkedIn from "../../images/socialIcons/linkedin.inline.svg"

const socials = [
  {
    icon: Twitter,
    link: "https://twitter.com/HelpThemHelpUs_",
  },
  {
    icon: Facebook,
    link: "https://www.facebook.com/heroeshelpthemhelpus",
  },
  {
    icon: Instagram,
    link: "https://instagram.com/helpthemhelpus_",
  },
  {
    icon: LinkedIn,
    link: "http://www.linkedin.com/company/helpthemhelpus/",
  },
]

const footerLinks = [
  ...links,
  {
    displayText: "Privacy",
    link: "/privacy",
  },
]

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.socials}>
        {socials.map(social => {
          const Icon = social.icon
          return (
            <a
              key={social.link}
              className={styles.socialIcon}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon />
            </a>
          )
        })}
      </div>
      <div className={styles.contactEmailContainer}>
        <p className={styles.contactEmail}>helpthemhelpus.co.uk </p>
      </div>
      <div className={styles.linkContainer}>
        {footerLinks.map(link => (
          <Link
            key={link.link}
            to={`/${link.link}`}
            className={styles.footerLink}
          >
            {link.displayText}
          </Link>
        ))}
      </div>
      <p className={styles.copyright}>
        © Heroes Foundation {new Date().getFullYear()}
      </p>
    </div>
  )
}

export default Footer

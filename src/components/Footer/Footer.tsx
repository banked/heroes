import React from "react"
import GofundmeButton from "../index/shared/GofundmeButton"
import classnames from "classnames"
import { Link } from "gatsby"
import { links } from "../Header/Header"

import * as styles from "./footer.module.scss"

import Twitter from "../../images/socialIcons/twitter.inline.svg"
import Instagram from "../../images/socialIcons/instagram.inline.svg"
import Facebook from "../../images/socialIcons/facebook.inline.svg"

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
]

const Footer = ({
  hideDonate = false,
  homepage = false,
}: {
  hideDonate?: boolean
  homepage?: boolean
}) => {
  return (
    <div
      className={classnames(
        styles.container,
        homepage ? styles.homepage : null
      )}
    >
      <div className={styles.innerContainer}>
        {!hideDonate && (
          <div className={styles.donateLinks}>
            <a
              className={styles.donate}
              href="https://www.gofundme.com/f/help-them-help-us"
              target="_blank"
              rel="noopener noreferrer"
            >
              Donate Now
            </a>
            <GofundmeButton />
          </div>
        )}
        <div className={styles.externalLinks}>
          <span className={styles.label}>NHS Workers - Coming Soon</span>
          <div>
            <button
              type="button"
              className={classnames(styles.externalLinkButton, styles.disabled)}
            >
              Apply for heroes help
            </button>
          </div>
          <span className={styles.label}>Learn more about coronavirus and</span>
          <a
            href="https://stopthespread.info"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button type="button" className={styles.externalLinkButton}>
              Help Stop the Spread
            </button>
          </a>
        </div>
        <div className={styles.break}></div>
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
          <a
            className={styles.contactEmail}
            href="mailto:contact@helpthemhelpus.co.uk"
          >
            contact@helpthemhelpus.co.uk
          </a>
        </div>
        <div className={styles.linkContainer}>
          {links.map(link => (
            <Link key={link.link} to={link.link} className={styles.footerLink}>
              {link.displayText}
            </Link>
          ))}
        </div>
        <p className={styles.copyright}>© Heroes {new Date().getFullYear()}</p>
      </div>
    </div>
  )
}

export default Footer

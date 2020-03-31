import * as React from "react"
import * as styles from "./shareSocials.module.scss"

import facebookSVG from "./assets/facebook.svg"
import linkedinSVG from "./assets/linkedin.svg"
import twitterSVG from "./assets/twitter.svg"

const ShareSocials = ({ pageLink }: { pageLink: string | null }) => {
  const handleFBClick = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${pageLink}`,
      "pop",
      "width=600, height=400, scrollbars=no"
    )
  }
  const handleLinkedInClick = () => {
    window.open(
      `https://www.linkedin.com/shareArticle?url=${pageLink}`,
      "pop",
      "width=600, height=400, scrollbars=no"
    )
  }
  const handleTwitterClick = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${pageLink}`,
      "pop",
      "width=600, height=400, scrollbars=no"
    )
  }
  if (pageLink) {
    return (
      <div className={styles.socials}>
        <a onClick={handleFBClick} className={styles.socialLink}>
          <img src={facebookSVG} alt="" />
        </a>
        <a onClick={handleLinkedInClick} className={styles.socialLink}>
          <img src={linkedinSVG} alt="" />
        </a>
        <a onClick={handleTwitterClick} className={styles.socialLink}>
          <img src={twitterSVG} alt="" />
        </a>
      </div>
    )
  }
  return null
}

export default ShareSocials

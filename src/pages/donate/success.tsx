import React from "react"
const querystring = require('querystring');
import { OutboundLink } from "gatsby-plugin-google-analytics"

import Layout from "../../components/donate/Layout"

import Twitter from "../../images/socialIcons/twitter.inline.svg"
import Facebook from "../../images/socialIcons/facebook.inline.svg"
import LinkedIn from "../../images/socialIcons/linkedin.inline.svg"

import * as styles from "../../components/donate/shared.module.scss";

import { renderStatic } from "react-helmet"

const DonateSuccessPage = () => {
  const shareText = 'I just donated to + H E R O E S Help Them Help Us'
  const url = 'https://www.helpthemhelpus.co.uk/'
  const hashtags = 'helpthemhelpus, nhs, heroes'
  const twitterHandle = 'HelpThemHelpUs_'
  const facebookHref = 'https://www.facebook.com/heroeshelpthemhelpus/'

    return (
      <Layout>
        <div className={styles.layout}>
          <div className={styles.successText}>
            <h2>Payment Successful!</h2>
            <p>A big thank you from everyone at Heroes.</p>
            <p>Please follow us on social, and share with friends &amp; family.</p>
            <p>Stay Safe.</p>
          </div>
          <OutboundLink eventCategory='button' eventAction='click' eventLabel='Twitter' target='_blank' href={`https://twitter.com/intent/tweet?${querystring.stringify({ text: shareText, hashtags: hashtags, via: twitterHandle, url: url })}`}>
            <Twitter className={styles.social}/>
          </OutboundLink>
          <OutboundLink eventCategory='button' eventAction='click' eventLabel='Facebook' target='_blank' href={`https://www.facebook.com/dialog/share?${querystring.stringify({ app_id: 1162396377486086, display: 'page', href: url, quote: shareText })}`}>
            <Facebook className={styles.social}/>
          </OutboundLink>
          <OutboundLink eventCategory='button' eventAction='click' eventLabel='Linkedin' target='_blank' href={`https://www.linkedin.com/sharing/share-offsite?${querystring.stringify({ url: url })}`}>
            <LinkedIn className={styles.social}/>
          </OutboundLink>
        </div>
      </Layout>
    )

}

export default DonateSuccessPage

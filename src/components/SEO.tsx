/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from "react"
// tslint:disable-next-line: import-name
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import favicon32 from "../images/favicons/favicon-32x32.png"
import favicon16 from "../images/favicons/favicon-16x16.png"
import faviconTouch from "../images/favicons/apple-touch-icon.png"

interface Props {
  description?: string
  title?: string
}

const SEO = (props: Props) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            language
            ogLanguage
            siteUrl
          }
        }
      }
    `
  )
  const { description, title } = props

  const metaDescription = description || site.siteMetadata.description
  const metaTitle = title || site.siteMetadata.title

  const titleString = title
    ? `${title} | ${site.siteMetadata.title}`
    : site.siteMetadata.title

  const schemaOrgJSONLD = [
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      "@id": "",
      url: "",
      name: metaTitle,
      alternateName: "",
    },
  ]

  return (
    <Helmet>
      <html lang={site.siteMetadata.siteLanguage} />
      <title>{titleString}</title>
      <meta name="description" content={metaDescription} />
      <meta
        name="image"
        content={`${site.siteMetadata.siteUrl}/shareImage.png`}
      />
      <meta name="author" content="stopthespread" />
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
      <link rel="apple-touch-icon" sizes="180x180" href={faviconTouch} />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
      <meta property="og:locale" content={site.siteMetadata.ogLanguage} />
      <meta property="og:site_name" content="HEROES" />
      <meta property="og:url" content="https://helpthemhelpus.co.uk" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta
        property="og:image"
        content={`${site.siteMetadata.siteUrl}/shareImage.png`}
      />
      <meta property="fb:app_id" content={site.siteMetadata.siteFBAppID} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:url" content={site.siteMetadata.siteUrl} />
      <meta name="twitter:description" content={metaDescription} />
      <meta
        name="twitter:image"
        content={`${site.siteMetadata.siteUrl}/shareImage.png`}
      />
      <link rel="stylesheet" href="https://use.typekit.net/oej1ggm.css" />
    </Helmet>
  )
}

export default SEO

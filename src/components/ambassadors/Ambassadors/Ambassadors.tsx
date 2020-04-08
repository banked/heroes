import React from "react"

import * as styles from "./ambassadors.module.scss"

import joeCole from "../../../images/ambassadors/joe_cole.jpg"
import carlyCole from "../../../images/ambassadors/carly_cole.jpg"
import tamara from "../../../images/ambassadors/tamara.jpg"
import jay from "../../../images/ambassadors/jay.jpg"
import instagram from "../../../images/socialIcons/instagram_color.png"
import instagramVerified from "../../../images/socialIcons/instagram_verified.png"
import twitter from "../../../images/socialIcons/twitter_color.png"
import twitterVerified from "../../../images/socialIcons/twitter_verified.png"

const content = [
  {
    name: "Joe Cole",
    title: "Former England Footballer, Founding Member of Heroes",
    bio: `Former England Footballer and now BT Sport pundit, Joe Cole has wholeheartedly committed his dedication to the cause, as Founding Member for Heroes, and will play a key role in leading this important initiative to help NHS workers on the front line. Joe is passionate about this project and has offered to support the initiative not just in the short term but beyond.`,
    instagram: "therealjoecole",
    image: joeCole,
  },
  {
    name: "Carly Cole",
    title: "Founding Member of Heroes",
    bio: `Carly, former fitness and wellbeing trainer (and wife of Joe Cole), shares her husband’s passion for this worthy cause. Always keeping her finger on the pulse, she's a regular attendee of global health and wellbeing events, keeping up to date with new movements and ideas to ensure health is always a key part of her family’s life. It was therefore a natural step for her to become involved with a cause that supports the wellbeing of others. Carly plays an instrumental role in the day to day operations of Heroes, working with partners and individuals to bring much needed support and services to the NHS frontline, where it is needed most. Carly is passionate, committed and dedicated to the cause and excited to be involved from the start.`,
    instagram: "carlycole1984",
    image: carlyCole,
  },
  {
    name: "Tamara Ecclestone",
    title: "Business woman and TV personality",
    bio: `Born in Milan and educated in London, Tamara is first and foremost a mother to Sophia and wife to Jay Rutland. She's a well-known television personality and business woman. Following in her family’s footsteps, Tamara began her career on TV screens reporting for F1 while also modelling for Armani. Tamara furthered her career in TV contributing to a wide-range of channels including Sky 1, ITV, Channel 4 and the BBC. She was last seen on our screens in her own reality TV show 'Tamara's World' on ITVBe. As well as her business projects Tamara works closely with charities close to her heart. Tamara is honoured to have joined forces with her husband Jay in becoming ambassadors for HEROES, giving them the opportunity to passionately try and raise awareness for this incredible project.`,
    instagram: "tamaraecclestoneofficial",
    twitter: "tamecclestone",
    image: tamara,
  },
  {
    name: "Jay Rutland",
    title: "Entrepreneur and Creative Director at Maddox Gallery",
    bio: (
      <>
        Jay joins Heroes as an ambassador alongside his wife Tamara Ecclestone,
        to help raise vital funds for the welfare and wellbeing of NHS staff
        fighting the COVID-19 pandemic. Jay is spearheading an initiative called
        ‘Art For Heroes’ by Maddox Gallery, an exclusive collection of artwork
        for sale donated by over 30 artists on{" "}
        <a
          href="http://www.artforheroes.co.uk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          artforheroes.co.uk
        </a>
        . By purchasing an artwork, you are supporting our doctors and nurses
        with full proceeds going to assist our NHS heroes across the country.
        Under his stewardship, philanthropy has become central to Maddox
        Gallery’s ethos with the team and its artists having helped raise over
        £5 million for a number of charities since the company’s inception four
        years ago.
      </>
    ),
    instagram: "jayrutland",
    image: jay,
  },
]

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Ambassadors</h1>
      <h4 className={styles.byline}>
        HEROES relies on generous contributions from our donors, volunteers, and
        partners to help our frontline NHS staff. Our ambassadors help us
        communicate our message far and wide, garnering crucial support,
        publicity and goodwill.
      </h4>
      <div className={styles.contentWrapper}>
        {content.map(item => (
          <div key={item.name} className={styles.itemContainer}>
            <img className={styles.mainImage} src={item.image} alt="" />
            <div className={styles.contentContainer}>
              <h6 className={styles.name}>{item.name}</h6>
              <p className={styles.position}>{item.title}</p>
              <p className={styles.biography}>{item.bio}</p>
              <div className={styles.socialLinkWrapper}>
                <a
                  className={styles.socialLink}
                  href={`https://www.instagram.com/${item.instagram}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={instagram} alt="" />
                  <span className={styles.socialText}>{item.instagram}</span>
                  <img src={instagramVerified} alt="" />
                </a>
              </div>
              {item.twitter && (
                <div className={styles.socialLinkWrapper}>
                  <a
                    className={styles.socialLink}
                    href={`https://www.twitter.com/${item.twitter}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={twitter} alt="" />
                    <span className={styles.socialText}>{item.twitter}</span>
                    <img src={twitterVerified} alt="" />
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AboutUs

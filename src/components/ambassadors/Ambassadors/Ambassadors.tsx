import React from "react"

import * as styles from "./ambassadors.module.scss"

import joeCole from "../../../images/ambassadors/joe_cole.jpg"
import carlyCole from "../../../images/ambassadors/carly_cole.jpg"
import instagram from "../../../images/socialIcons/instagram_color.png"
import instagramVerified from "../../../images/socialIcons/instagram_verified.png"

const content = [
  {
    name: "Joe Cole",
    title: "Former England Footballer, Founding Member of Heroes",
    bio: `Former England Footballer and now BT Sport pundit, Joe Cole has committed his dedication to the cause as an ambassador for Heroes and will play a key role in leading this important initiative to help NHS workers on the front line. Joe is passionate about this project and has offered to support the initiative not just in the short term but beyond and has also made a generous donation of his own money.`,
    instagram: "therealjoecole",
    image: joeCole,
  },
  {
    name: "Carly Cole",
    title: "Founding Member of Heroes",
    bio: `Carly, former fitness and wellbeing trainer and wife of Joe Cole, halted her fitness career when Joe joined football in the premiership to commit her life to her family and support Joe's career. Always keeping her eye on the pulse she's a regular attendee of global health and wellbeing events keeping up to date with new movements and ideas to ensure health is always a key part to her family's life. It was therefore a natural step for her to become involved with a cause that supports the wellbeing of others. Carly plays an instrumental role in the day to day operations of Heroes working with partners and individuals to bring much needed support and services to the NHS frontline. Carly is passionate, committed and dedicated to the cause and excited to be involved from the start.`,
    instagram: "carlycole1984",
    image: carlyCole,
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
              <a
                className={styles.instagramLink}
                href={`https://www.instagram.com/${item.instagram}/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagram} alt="" />
                <span className={styles.instagramText}>{item.instagram}</span>
                <img src={instagramVerified} alt="" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AboutUs

import React from "react"

import * as styles from "./aboutUs.module.scss"

import twitterLogo from "../../../images/socialIcons/twitter.svg"
import dawson from "../../../images/team/dawson.jpg"
import djelal from "../../../images/team/djelal.jpg"
import dpimenta from "../../../images/team/dpimenta.jpg"
import mehdian from "../../../images/team/mehdian.jpg"
import mpimenta from "../../../images/team/mpimenta.jpg"
import siems from "../../../images/team/siems.jpg"
import solanki from "../../../images/team/solanki.jpg"
import yilmaz from "../../../images/team/yilmaz.jpg"
import Logo from "../../../images/logo.inline.svg"
import { Link } from "gatsby"
import Footer from "../../Footer"

const teamContent = [
  {
    image: dpimenta,
    name: "Dr Dominic Pimenta",
    position: "Cardiology Registrar, London",
    quote: `"We need to do all we can to protect and support the frontline NHS workers, and provide for them whatever they need, as quick as they need it."`,
    twitterHandle: "juniordrblog",
  },
  {
    image: yilmaz,
    name: "Ms Dilsan Yilmaz",
    position: "NIHR Academic Clinical Fellow, General Surgery, London",
    quote:
      "Interested in medical education and has edited several medical student textbooks. Her research interests are in breast surgery.",
    twitterHandle: "DilsanYilmaz",
  },
  {
    image: mehdian,
    name: "Dr Roshana Mehdian",
    position: "Trauma and Orthopaedic Registrar, London",
    quote:
      "Mother of two and has campaigned extensively for healthcare staff and the NHS.",
    twitterHandle: "RoshanaMN",
  },
  {
    image: mpimenta,
    name: "Rebecca Pimenta",
    position: 'Singer / songwriter "LEIO"',
    quote: `"Never have we been more called to pause our own dreams for a different kind of calling. Our NHS staff have become our frontline soldiers in this fight against COVID19. Now is the time to set aside our own agendas for a greater cause, turning our skills into ways that can support. To help them, help us."`,
    twitterHandle: "leiomusic",
  },
  {
    image: dawson,
    name: "Dr Michelle Dawson",
    position: "Consultant Anaesthetist",
    quote:
      "Clinical Advisor to NHS England, worked part time in medical procurement for 10 years, developed the Life Science Industry Register, and is a board member of National Association of Medical Devices Educators and Trainers.",
    twitterHandle: "juniordrblog",
  },
  {
    image: djelal,
    name: "Nej D'jelal",
    position:
      "Managing Director, Head of Electronic Equities and Quant Prime Services Product, EMEA.",
    quote:
      "Co-founder of the not-for-profit Plato Partnership, with a strong professional history in electronic and algorithmic trading and financial technology.",
    twitterHandle: "NejDjelal",
  },
  {
    image: solanki,
    name: "Ravi Solanki",
    position: "Final Year Medical Student, University of Cambridge",
    quote: `"They don't wear capes and they can't fly. But they are superheroes. They protect us each and everyday. Now we must do our part to help them."`,
    twitterHandle: "ravi_sola",
  },
  {
    image: siems,
    name: "Raymond Siems",
    position: "CEO, Catalyst AI",
    quote: `"We need great people, ideas, and technology to solve big problems. When all three come together, amazing things happen."`,
    twitterHandle: "RaymondSiems",
  },
]

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <Link to="/">
        <Logo />
      </Link>
      <div className={styles.headingContainer}>
        <h1 className={styles.title}>Team</h1>
        <p className={styles.byline}>
          We are doctors, musicians, technologists, students, and artists. We've
          come together for one reason: we love our NHS. We love the people that
          work day in, day out to take care of us. Today, they need our help
          more than ever before. We want to do our best to help them, help us.
        </p>
      </div>
      <div className={styles.teamContainer}>
        {teamContent.map(member => (
          <div key={member.name} className={styles.member}>
            <img className={styles.image} src={member.image} alt="" />
            <h6 className={styles.name}>{member.name}</h6>
            <p className={styles.position}>{member.position}</p>
            <p className={styles.quote}>{member.quote}</p>
            <a
              className={styles.twitterLink}
              href={`https://twitter.com/@${member.twitterHandle}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={styles.twitterLogo} src={twitterLogo} alt="" />
              <span className={styles.twitterHandle}>
                @{member.twitterHandle}
              </span>
            </a>
          </div>
        ))}
      </div>
      <Footer hideDonate={true} />
    </div>
  )
}

export default AboutUs

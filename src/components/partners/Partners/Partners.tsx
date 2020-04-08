import React from "react"

import * as styles from "./partners.module.scss"

import chilliBees from "../../../images/partners/chilli_bees.png"
import story from "../../../images/partners/story.png"
import williamWhite from "../../../images/partners/william_white.png"
import selfridges from "../../../images/partners/selfridges.png"
import baylissAndHarding from "../../../images/partners/bayliss_and_harding.png"
import addisonLee from "../../../images/partners/addison_lee.png"
import esteeLauder from "../../../images/partners/estee_lauder.png"
import flavourManagement from "../../../images/partners/flavour_management.png"
import contractorsAppeal from "../../../images/partners/contractors_appeal.png"

const content = [
  {
    name: "William White",
    icon: williamWhite,
    description:
      "The London butchers’ partnered with HEROES to deliver fresh ingredients, a selection of top quality meats and vegetables to the homes of NHS staff to keep their kitchens fully stocked. ",
  },
  {
    name: "Restaurant Story",
    icon: story,
    description:
      "When Tom Sellers was forced to close his Michelin starred Restaurant Story due to government restrictions, he turned his efforts into preparing and delivering 50 filling lunches to Guys’ Hospital staff.",
  },
  {
    name: "Chilli Bees",
    icon: chilliBees,
    description:
      "Before Chilli Bees closed their kitchens for lockdown, they were able to cook over 800 wholesome meals for the NHS staff at St George’s and Royal Brompton Hospitals. While their business is closed, owner Ellie and her mum will continue to cook what they can from home for the staff of St George’s.",
  },
  {
    name: "Selfridges",
    icon: selfridges,
    description:
      "Londons luxury department store Selfridges made sure NHS frontline staff didnt miss out this Easter with a kind donation of 1,600 Easter eggs from their stock. We are working with Selfridges to look at on-going opportunities for support.",
  },
  {
    name: "Bayliss and Harding",
    icon: baylissAndHarding,
    description:
      "English sustainable luxury toilettries brand kindly donated 50 manicure sets to an NHS wellbeing centre, taking care of the helping hands taking care of our country.",
  },
  {
    name: "Addison Lee",
    icon: addisonLee,
    description:
      "We teamed up with Addison Lee to help deliver Easter eggs donated by Selfidges to the frontline. Addison Lee provided the cars and drivers that delivered 200 eggs to London hopstals, GP's and hospices.",
  },
  {
    name: "Estee Lauder",
    icon: esteeLauder,
    description:
      "We were approached by Estee Lauder for help delivering 500 medical masks to NHS staff in need. Once received, we distributed the masks to various hospices and GP surgeries around the UK.",
  },
  {
    name: "Flavour Management",
    icon: flavourManagement,
    description:
      "The team at Flavour Management represent some of the best chefs in the UK. They've been crucial in the organisation and delivery of freshly prepared, hot meals to hospitals all over the country, including pizzas cooked by Aldo Zilli and paella made by Omar Allibhoy. We're pleased to continue our partnership, to feed more NHS staff.",
  },
  {
    name: "Contractors Appeal",
    icon: contractorsAppeal,
    description:
      "Set up to source and purchase PPE from the UK construction sector before distributing it to NHS staff, care workers and vulnerable groups – Contractors Appeal is our on-going partner for protecting those in need.",
  },
]

const Partners = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>COLLABORATORS</h1>
      <h4 className={styles.byline}>
        Our NHS frontline staff depend on the generosity of our collaborators.
        We’re all thankful for their substantive contributions, which are always
        welcome.
      </h4>
      <div className={styles.content}>
        {content.map(item => (
          <div key={item.name} className={styles.itemContainer}>
            <div className={styles.logoContainer}>
              <img className={styles.logo} src={item.icon} alt="" />
            </div>
            <div className={styles.textContent}>
              <p className={styles.heading}>{item.name}</p>
              <p className={styles.text}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Partners

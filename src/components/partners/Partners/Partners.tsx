import React from "react"

import * as styles from "./partners.module.scss"

import chilliBees from "../../../images/partners/chilli_bees1.png"
import story from "../../../images/partners/story1.png"
import williamWhite from "../../../images/partners/william_white1.png"
import selfridges from "../../../images/partners/selfridges_co1.png"
import baylissAndHarding from "../../../images/partners/baylis_and_harding1.png"
import addisonLee from "../../../images/partners/addison_lee1.png"
import esteeLauder from "../../../images/partners/estee_lauder1.png"
import flavourManagement from "../../../images/partners/flavour_management1.png"
import candyKittens from "../../../images/partners/candy_kittens1.png"
import fsc from "../../../images/partners/FSC1.png"
import noxyBrothers from "../../../images/partners/noxy_brothers1.png"
import contractorsAppeal from "../../../images/partners/contractors_appeal1.png"

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
      "Our long-term friend and partner, Selfridges, have helped us to deliver thousands of Easter eggs and treats to NHS workers all over the country. Their #KindChallenge is running now on Instagram.",
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
      "We teamed up with Addison Lee to help deliver Easter eggs donated by Selfridges to the frontline. Addison Lee provided the cars and drivers that delivered 200 eggs to London hopstals, GP's and hospices.",
  },
  {
    name: "Estee Lauder",
    icon: esteeLauder,
    description:
      "Estee Lauder kindly donated 500 medical masks and 1000 bottles of hand sanitizer to NHS staff in need. Once received, we distributed across the country to various hospices and GP surgeries.",
  },
  {
    name: "Flavour Management",
    icon: flavourManagement,
    description:
      "The team at Flavour Management represent some of the best chefs in the UK. Tony Singh, Francesco Mazzei, Aldo Zilli and Omar Allibhoy have all cooked the highest quality freshly prepared hot meals for hospitals from Edinburgh to Kent. We’re please continue our partnership, to feed more NHS staff.",
  },
  {
    name: "Candy Kittens",
    icon: candyKittens,
    description:
      "We have partnered with Candy Kittens to deliver thousands of sweet treats to rewarding NHS workers. Candy Kittens kindly lent us vans and even created a HEROES sweet, in stores soon, with proceeds going towards HEROES.",
  },
  {
    name: "Five Star Catering",
    icon: fsc,
    description:
      "We have partnered with Five Star Catering to deliver thousands of meals and ice cream to hospitals via food truck. We will expand the fleet nationwide!",
  },
  {
    name: "Noxy Brothers",
    icon: noxyBrothers,
    description:
      "We partnered with the amazing work of Noxy Brothers Coffee company has delivered free coffee to thousands of NHS workers at two hospital, not only providing vital caffeine to hardworking staff but fundraising over £40,000 as well!",
  },
  // {
  //   name: "Contractors Appeal",
  //   icon: contractorsAppeal,
  //   description:
  //     "Set up to source and purchase PPE from the UK construction sector before distributing it to NHS staff, care workers and vulnerable groups – Contractors Appeal is our on-going partner for protecting those in need.",
  // },
]

const Partners = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Partners</h1>
      <h4 className={styles.byline}>
        Our NHS frontline staff depend on the generosity of our partners. We’re
        all thankful for their substantive contributions, which are always
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

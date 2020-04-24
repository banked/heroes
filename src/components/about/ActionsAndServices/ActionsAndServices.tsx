import React from "react"
import paragraphLink from "../../../utils/paragraphLink"

import * as styles from "./actionsAndServices.module.scss"

import ppe from "../../../images/aboutIcons/ppe.png"
import childcare from "../../../images/aboutIcons/childcare.png"
import counselling from "../../../images/aboutIcons/counselling.png"
import education from "../../../images/aboutIcons/education.png"
import food from "../../../images/aboutIcons/food.png"
import grants from "../../../images/aboutIcons/grants.png"
import fundraising from "../../../images/aboutIcons/fundraising.png"
import partners from "../../../images/aboutIcons/partners.png"
import transport from "../../../images/aboutIcons/transport.png"

const items = [
  {
    icon: ppe,
    title: "Personal Protective Equipment",
    details: (
      <>
        <p>
          We are committed to protecting frontline NHS workers and ensuring they
          have the vital personal protective equipment they need.
        </p>
        <p>We work on three levels:</p>
        <ol>
          <li>
            With the government to augment the search and procurement of PPE
            outside traditional supply lines.
          </li>
          <li>
            With industry to supply donations of industrial PPE to NHS workers
            in hospitals and GPs, hospices and care homes
          </li>
          <li>
            With grassroots manufacturers creating 3D printing hubs to create
            personal protective equipment such as eyewear. Our London Hub at
            Makerversity can produce 1500 visors a day currently.
          </li>
        </ol>
        <p>
          We work with an umbrella group called SHIELD of industry experts, 3D
          printers, legal and regulatory experts.
        </p>
        <p>
          We are always looking for more to join us and streamline the effort to
          create and source PPE. Please get in touch today.
        </p>
      </>
    ),
  },
  {
    icon: childcare,
    title: "Our friends and partners",
    details: (
      <>
        <p>
          We are touched and honoured to be supported by such a huge range of
          business, charities and public figures, who all want to help our NHS
          Frontline as best they can.
        </p>
        <p>
          We work with a range of businesses to provide discounted products
          including gifts, food, and travel. If you are a business and
          interested in becoming a HEROES partner, get in touch here [link to
          business contact form].
        </p>
        <p>
          We also work alongside and with other charities helping NHS Workers.
          The British Medical Association Giving committee has a seat on our
          advisory committee, and we sit on theirs, collaborating to fund
          support for the frontline through mutual good work.
        </p>
        <p>
          We are also honoured to be supported by public figures, from our
          founding members of ex-England footballer and BT Sport pundit Joe Cole
          and his wife Carly Cole, to Maddox Galley&rsquo;s Creative Director,
          Jay Rutland and his wife Tamara Ecclestone; we are privileged to count
          on their help and support to fundraise and boost our organisation to
          help the NHS frontline.
        </p>
      </>
    ),
  },
  {
    icon: counselling,
    title: "Meal & Food Delivery",
    details: (
      <>
        <p>
          We work with a number of partners to deliver food to NHS workers at
          home and at work.
        </p>
        <p>
          From celebrity chefs such as Aldo Zilli, Francesco Mazzei and Omar
          Allibhoy, to food boxes at home from WWMeats and others, we aim to
          feed our frontline and their families, bring a little joy but also
          some much needed basics at a challenging time.
        </p>
      </>
    ),
  },
  {
    icon: education,
    title: "Childcare",
    details: (
      <>
        <p>
          We work with the largest childcare provider in the UK, [link to
          childcare.co.uk], to deliver free and safe childcare options so NHS
          frontline workers can go to work with peace of mind, and can provide
          co-op care around the country to look after their children and
          vice-versa.
        </p>
        <p>
          We also fund support grants through the hardship fund to cover costs
          of childcare up to &pound;1000 per cycle.
        </p>
      </>
    ),
  },
  {
    icon: food,
    title: "Fundraising",
    details: (
      <>
        <p>
          We raise money from the general public and through special campaigns.
        </p>
        <p>
          In combination with the incredible support from the Maddox Gallery and
          Jay Rutland the #ArtForHeroes charity exhibition is currently running
          and can be viewed here: link to [artforheroes.co.uk]
        </p>
        <p>
          In the music world we are honoured by the breadth and depth of talent
          support our campaign through #MusicForHeroes.
        </p>
        <p>
          We are always on the lookout for new ways to help and raise awareness.
          If you want to fundraise with us or come on board to help please get
          in touch here [link to Google Form - individual]
        </p>
      </>
    ),
  },
  {
    icon: grants,
    title: "Counselling Services",
    details: (
      <>
        <p>
          HEROES recognise the extraordinary strain on everyday NHS workers in
          response to COVID-19. Working outside of their usual places of work
          and skills, in harrowing conditions, takes its toll.
        </p>
        <p>
          We have created a hub of mental wellbeing support services across all
          staff groups, including free sessions with professional therapists at
          HarleyTherapy.com and links to the British Medical Association&rsquo;
          Wellbeing service, and the national NHS wellbeing service.
        </p>
      </>
    ),
  },
  {
    icon: fundraising,
    title: "Transport",
    details: (
      <>
        <p>
          HEROES is working with a number of partners to offer free or
          discounted cab fares directly to NHS workers during the COVID-19
          pandemic.
        </p>
      </>
    ),
  },
  {
    icon: partners,
    title: "Education",
    details: (
      <>
        <p>
          We provide both educational resources for the public and a hub of
          resources for clinicians about coronavirus and COVID-19. Check it out
          here [link to public education resource]
        </p>
      </>
    ),
  },
  {
    icon: transport,
    title: "Grants",
    details: (
      <>
        <p>
          HEROES delivers hassle-free grants, either paying directly to the
          partner company for small items like cabs or pizza, or a hardship
          based fund up to &pound;1000 for childcare, accommodation or
          transport.
        </p>
      </>
    ),
  },
]

const ActionsAndServices = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Actions and services we are providing.</h4>
      <div className={styles.itemsContainer}>
        {items.map(item => (
          <div key={item.title} className={styles.itemContainer}>
            <img src={item.icon} className={styles.icon} alt="" />
            <h6 className={styles.heading}>{item.title}</h6>
            <div className={styles.contentContainer}>{item.details}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ActionsAndServices

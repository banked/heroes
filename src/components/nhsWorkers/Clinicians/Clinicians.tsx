import React from "react"

import * as styles from "./clinicians.module.scss"

const items = [
  {
    title: "Royal College of General Practice - COVID-10 Resource Hub",
    description:
      "Collection of GP-focussed guidance and research for coronavirus.",
    website: "https://elearning.rcgp.org.uk/course/view.php?id=373",
  },
  {
    title:
      "The Faculty of Intensive Care Medicine, Intensive Care Society, Association of Anaesthetists and Royal College of Anaesthetists",
    description:
      "Working in collaboration they have developed this website to provide the UK intensive care and anaesthetic  community with information, guidance and resources required to support their understanding of and management of COVID-19.",
    website: "https://icmanaesthesiacovid-19.org/clinical-guidance",
  },
  {
    title: "NHS Health Research Authority",
    description: "Current research projects focused on COVID-19 in the UK",
    website:
      "https://www.hra.nhs.uk/covid-19-research/approved-covid-19-research/",
  },
  {
    title: "The Lancet COVID-19 Resource Hub",
    description: null,
    website: "https://www.thelancet.com/coronavirus/research",
  },
  {
    title: "The World Health Organisation COVID-19 Resource Hub",
    description: null,
    website:
      "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/global-research-on-novel-coronavirus-2019-ncov",
  },
  {
    title: "The Royal College of Nursing Guidance on COVID-19",
    description: null,
    website:
      "https://rcni.com/nursing-standard/evidence-and-practice/covid-19-clinical-resource-nurses-159216",
  },
]

const Clinicians = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h4 className={styles.title}>Clinician resources</h4>
        <p className={styles.description}>
          COVID-19 is a brand-new virus we are still learning about. From
          primary care to intensive care, many organizations are working hard
          and rapidly to collate what we know so far.
        </p>
        <div className={styles.itemsContainer}>
          {items.map(item => (
            <div key={item.title} className={styles.itemContainer}>
              <h6 className={styles.itemTitle}>{item.title}</h6>
              {item.description && (
                <p className={styles.itemDescription}>{item.description}</p>
              )}
              <a href={item.website} target="_blank" rel="noopener noreferrer">
                <button className={styles.button}>Visit Website</button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Clinicians

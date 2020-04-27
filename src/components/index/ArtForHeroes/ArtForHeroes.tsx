import React from "react"
import * as styles from "./artForHeroes.module.scss"

import backgroundImage from "../../../images/art_gallery.jpg"
import partners from "../../../images/art_heroes_partners.png"

const ArtForHeroes = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <img className={styles.image} src={backgroundImage} alt="" />
        <div className={styles.titleContainer}>
          <h4 className={styles.title}>Art for Heroes</h4>
        </div>
        <div className={styles.overlay}>
          <h1 className={styles.overlayTitle}>Art For Heroes</h1>
          <p className={styles.description}>
            In partnership with Maddox Gallery we launched Art for HEROES, a
            collaboration of fantastic artists, including photographer David
            Yarrow and musician Boy George, who donated pieces to raise money
            for NHS staff.
          </p>
          <div className={styles.buttonContainer}>
            <a
              href="https://artforheroes.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles.button}>Visit Website</button>
            </a>
          </div>
          <img className={styles.partners} src={partners} alt="" />
        </div>
      </div>
    </div>
  )
}

export default ArtForHeroes

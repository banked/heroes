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
            Tum dicere exorsus est laborum et quas molestias excepturi sint,
            obcaecati cupiditate non intellegamus, tu paulo ante cum teneam
            sententiam, quid bonum sit extremum
          </p>
          <p className={styles.description}>
            Faciunt, ut ipsi auctori huius disciplinae.
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

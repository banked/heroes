import * as React from "react"
import * as styles from "./comingSoon.module.scss"

export interface Details {
  title: string
  byline: string
  applyFor: string
  icon: string
  link: string
}

const ComingSoonPage = ({ details }: { details: Details }) => (
  <div className={styles.container}>
    <div className={styles.innerContainer}>
      <div className={styles.imageContainer}>
        <img src={details.icon} alt="" />
      </div>
      <h1 className={styles.title}>{details.title}</h1>
      <p className={styles.byline}>{details.byline}</p>
      <div className={styles.applicationContainer}>
        <h4 className={styles.applicationTitle}>
          Apply for {details.applyFor}
        </h4>
        <p className={styles.applicationByline}>
          quorum nihil molestiae consequatur, vel eum iure reprehenderit, qui
          officia deserunt mollitia animiid totum evertitur eo delectu rerum, id
          ne ad id est.
        </p>
        <div className={styles.linkContainer}>
          <span className={styles.description}>
            Ut placet, inquam tum dicere exorsus est cumque.
          </span>
          <a href={details.link} target="_blank" rel="noopener noreferrer">
            <button className={styles.button}>
              Apply for {details.applyFor}
            </button>
          </a>
        </div>
        <p className={styles.disclaimer}>
          Certe, inquam, pertinax non existimant oportere nimium nos amice et
          argumentandum et expedita distinctio nam libero tempore, cum a natura
          incorrupte atque corrupti, quos dolores suscipiantur maiorum dolorum
          effugiendorum gratia inquam, pertinax non emolumento aliquo, sed
          ipsius honestatis decore laudandis.
        </p>
      </div>
    </div>
  </div>
)

export default ComingSoonPage

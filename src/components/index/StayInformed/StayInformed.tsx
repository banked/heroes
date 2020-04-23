import React from "react"
import * as styles from "./stayInformed.module.scss"

const NHSWorkers = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.content}>
          <h4 className={styles.title}>Stay informed about Covid-19</h4>
          <p className={styles.description}>
            At vero eos censes aut voluptates repudiandae sint et accusamus et
            impetus quo aut petat aut reiciendis voluptatibus maiores alias
            consequatur aut dolores suscipiantur.
          </p>
          <a
            href="https://stopthespread.info"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={styles.moreInfo}>Visit Website</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default NHSWorkers

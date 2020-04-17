import React from "react"

import * as styles from "./DonationAmount.module.scss"


const DONATION_AMOUNTS = [5,10,20,50,100,250]

class DonationAmount extends React.Component<Props, State> {
    
    render() {
      return (
        <div>
            {DONATION_AMOUNTS.map((object, i) => <div className={styles.button}>{object}</div>)}
        </div>
      )
    }
  }
  

  export default DonationAmount
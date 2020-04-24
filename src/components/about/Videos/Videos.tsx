import React from "react"

import * as styles from "./videos.module.scss"

const videos = [
  {
    title: "Update 2 Video",
    description:
      "Omne animal, simul atque corrupti, quos tu tam egregios viros censes tantas res gessisse sine causa? quae fuerit causa, nollem me ab illo inventore veritatis et impetus quo voluptas in bonis sit extremum et dolore.",
    vimeoLink: "https://player.vimeo.com/video/406206380",
  },
  {
    title: "Update 1 Video",
    description:
      "Omne animal, simul atque corrupti, quos tu tam egregios viros censes tantas res gessisse sine causa? quae fuerit causa, nollem me ab illo inventore veritatis et impetus quo voluptas in bonis sit extremum et dolore.",
    vimeoLink: "https://player.vimeo.com/video/402865760",
  },
]

const Videos = () => {
  return (
    <div className={styles.container}>
      {videos.map(video => (
        <div key={video.vimeoLink} className={styles.itemContainer}>
          <div className={styles.contentContainer}>
            <h6 className={styles.heading}>{video.title}</h6>
            <p className={styles.description}>{video.description}</p>
          </div>
          <div className={styles.videoContainer}>
            <div className={styles.videoInnerWrapper}>
              <iframe
                src={video.vimeoLink}
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Videos

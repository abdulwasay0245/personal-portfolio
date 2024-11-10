import React from 'react'
import styles from "@/app/page.module.css"
const Project = () => {
  return (
      <main className={styles.bg}>
          <div className={styles.projectsParent}>
              <div className={styles.projectsHeading} id={styles.heading}>
                  <h1>Projects</h1>
              </div>
              <div className={styles.projects}>
                  <div className={styles.projectInner}>
                      <div className={styles.cards}></div>
                      <div className={styles.cards}></div>
                      <div className={styles.cards}></div>
                      <div className={styles.cards}></div>
                  </div>
              </div>
         </div>
    </main>
  )
}

export default Project
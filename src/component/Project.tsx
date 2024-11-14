import React from 'react'
import styles from "@/app/page.module.css"
import Link from 'next/link'
const Project = () => {
  return (
    //   <main className={styles.bg}>
          
    //       <div className={styles.projectsParent}>
    //           <div className={styles.projectsHeading} id={styles.heading}>
    //               <h1>Projects</h1>
    //           </div>
    //           <div className={styles.projects}>
                  
    //               <div className={styles.projectInner}>
    //                   <div className={styles.cards}></div>
    //                   <div className={styles.cards}></div>
    //                   <div className={styles.cards}></div>
    //                   <div className={styles.cards}></div>
    //               </div>
    //           </div>
    //      </div>
      // </main>
      <section>
          <div className={styles.projectGrid}>
              <div className={styles.projectHero}>
                  <h1 className={styles.projectHeading}>PORTFOLIO</h1>
              </div>
              <div className={styles.projects}>

                           <div className={styles.projectInner}>
                      <div className={styles.cards}><Link href="https://urban-dentals.vercel.app/">Urban Dental</Link></div>
                      <div className={styles.cards}><Link href='https://editable-resume-builder-omega.vercel.app/'>CV Builder</Link></div>
                      <div className={styles.cards}><Link href='https://assignment5-sandy.vercel.app/'>Assigment5</Link></div>
                      <div className={styles.cards}><Link href='https://amazon-clone-six-gules-79.vercel.app/'>Amazon Clone</Link></div>
                  </div>
                  </div>
          </div>
      </section>
  )
}

export default Project
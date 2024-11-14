import React from 'react'
import styles from "@/app/page.module.css"
import Link from 'next/link'
const Header = () => {
  return (
      <header>
          <div className={styles.head}>
              
              <div className={styles.nav}>
                  <div className={styles.left}>
                      <h1>
                          Personal Portfolio
                      </h1>
                  </div>
                  <div className={styles.right}>
                      <nav>
                          <Link href="/"><button className={styles.navbtn}>Home</button></Link>
                          <Link href="/project"><button className={styles.navbtn}>Portfolio</button></Link>
                          <Link href="/about"><button className={styles.navbtn}>About Me</button></Link>
                      </nav>
                      </div>
                 
              </div>
                  
          </div>
    </header>
  )
}

export default Header
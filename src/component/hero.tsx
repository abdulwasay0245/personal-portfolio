import React from 'react'
import styles from "@/app/page.module.css"
import Image from 'next/image'

const Hero = () => {
    return (
      <main className={styles.bg}>
      <div className={styles.hero}>
          <div className={styles.heroRight}>
              <h1 className={styles.first}>Hello I am</h1>
              <h1 className={styles.second}> Abdul Wasay </h1>
                    <p className={styles.third}> Front-end Developer </p>
                    <button className={styles.hireMe}>Hire Me</button>
          </div>
          <div className={styles.heroLeft}>
              <Image
                  src="/hero.jpg"
                  alt='s'
                  height={700}
                  width={700}
                  layout='responsive'
                  className={styles.heroImg}
              >
                    
              </Image>
          </div>
            </div>
            </main>
  )
}

export default Hero
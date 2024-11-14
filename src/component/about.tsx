import React from 'react'
import styles from "@/app/page.module.css"
import Link from 'next/link'

const About = () => {
  return (
   
    <section id='about'>
      <div className={styles.aboutGrid}>
        <div className={styles.heroAbout}><h1 className={styles.aboutHeading}>ABOUT ME</h1></div>
        <div className={styles.aboutParent}>
          <div className={styles.aboutDetails}>
            <div className={styles.aboutPic}></div>
            <div className={styles.aboutData}>
              <h2>Hi there , i am Abdul Wasay</h2>
              <h2>Front-end Developer</h2>
              <p>A skilled front-end developer specializing in crafting intuitive and visually stunning user interfaces. With a strong foundation in HTML, CSS, and JavaScript, I am passionate about leveraging AI and machine learning to create dynamic and engaging web experiences. I am dedicated to staying up-to-date with the latest trends and technologies to deliver innovative and user-centric solutions.</p>
              <p>
                Email : abdulwasay0245@gmail.com
              </p>
              <p>Phone : 03152127174</p>
              <p>From : Karachi Pakistan</p>
              <p>Language : Urdu English</p>
              <Link href="/Abdul-Wasay.pdf"><button className={styles.hireMe}>Download Resume</button></Link>
              
            </div>
          </div>
        </div>
</div>
    </section>
  )
}

export default About

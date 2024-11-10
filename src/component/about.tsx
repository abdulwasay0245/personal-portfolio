import React from 'react'
import styles from "@/app/page.module.css"
import Image from 'next/image'
const About = () => {
  return (
    <main className={styles.bg}>
      <div className={styles.hero}>
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
        <div className={styles.heroRight}>
          <h1 className={styles.first}>Hello I am</h1>
          <h1 className={styles.second}> Abdul Wasay </h1>
          <p className={styles.third} id={styles.thirdPara}> As a frontend web developer and a dedicated B.Sc.S student, I am eager to dive into the exciting world of agentic AI systems. With a solid foundation in web development, I believe I can effectively contribute to the development and implementation of these intelligent systems. My skills in HTML, CSS, and JavaScript, coupled with a keen interest in AI, position me well to work efficiently and creatively in this field. I am excited about the potential of agentic AI to revolutionize various industries, and I am eager to be a part of this technological advancement. </p>
          <button className={styles.hireMe}>Hire Me</button>
        </div>
      </div>
    </main>
  )
}

export default About
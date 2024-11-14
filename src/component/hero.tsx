"use client"
import React from 'react'
import styles from "@/app/page.module.css"
import Image from 'next/image'
import { useRef, useEffect , useState} from 'react'

const Hero = () => {
    const imgRef = useRef(null)
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll',
                handleScroll);
        };
    }, []);




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
                  src="/wasay.jpg"
                  alt='s'
                  height={700}
                  width={700}
                  layout='responsive'
                        className={styles.heroImg}
                        ref={imgRef}
                        style={{
                            transform: `translateX(${scrollPosition * 0.15}px)`,
                        }}
              >
                    
              </Image>
          </div>
            </div>
            </main>
  )
}

export default Hero
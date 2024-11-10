import React from 'react'
import styles from "@/app/page.module.css"
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer>
            <div className={styles.footer}>
                <div className={styles.credit}>
                    <h2>Developed by Abdul Wasay</h2>
                </div>
                <div className={styles.rights}>
                    <p>© 2024 Abdul Wasay, All Rights Reserved.</p>
                </div>
                <div className={styles.socialMedia}>
                    <Link href='https://github.com/abdulwasay0245'> <Image alt='#' width={20} height={20} src="/github.png"></Image></Link>
                    <Link href='https://www.linkedin.com/in/wasaydevops/'> <Image alt='#' width={20} height={20} src="/linkdin.png"></Image> </Link>
                    <Link href="https://www.instagram.com/abdul_wasay0245/">  <Image alt='#' width={20} height={20} src="/instagram.png"></Image> </Link>
                </div>
            </div>
        </footer>
  )
}

export default Footer
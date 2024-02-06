import React from 'react'
import styles from "./card.module.css"
import Image from 'next/image'
import Link from 'next/link'

const Card = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imageContainer}>
            <Image src="" alt="" fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>9.14.2023 - </span>
                <span className={styles.category}>CULTURE</span>
            </div>
            <Link href="/"><h1 className={styles.title}>Title</h1></Link>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab at dicta eligendi non hic voluptatibus eius sequi, voluptate sint deleniti sed explicabo dolorem similique animi deserunt Ab at dicta eligendi!</p>
            <Link href="/" className={styles.link}>Read More</Link>
        </div>

    </div>
  )
}

export default Card
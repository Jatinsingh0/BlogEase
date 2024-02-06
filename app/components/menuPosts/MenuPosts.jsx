import React from 'react'
import styles from "./menuPosts.module.css"
import Link from 'next/link'
import Image from 'next/image'

const MenuPosts = ({withImage}) => {
  return (
    <div>
        <div className={styles.items}>
            <Link href="/" className={styles.item}>
                { withImage && (<div className={styles.imageContainer}>
                    <Image src="/travel.jpeg" alt="" fill className={styles.image}/>
                </div>)}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.travel}`}>Travel</span>
                    <h3 className={styles.postTitle}>Exploring new places and experiences worldwide.</h3>
                    <div className={styles.detail}>
                        <span className={styles.userName}>Jatin Singh - </span>
                        <span className={styles.date}>14.09.2023</span>
                    </div>
                </div>
            </Link>

            <Link href="/" className={styles.item}>
               { withImage && (<div className={styles.imageContainer}>
                    <Image src="/culture.jpeg" alt="" fill className={styles.image}/>
                </div>)}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.culture}`}>Culture</span>
                    <h3 className={styles.postTitle}>Culture is Traditions values art language customs identity.</h3>
                    <div className={styles.detail}>
                        <span className={styles.userName}>Jatin Singh - </span>
                        <span className={styles.date}>14.09.2023</span>
                    </div>
                </div>
            </Link>

            <Link href="/" className={styles.item}>
                { withImage && (<div className={styles.imageContainer}>
                    <Image src="/fashion.jpg" alt="" fill className={styles.image}/>
                </div>)}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.fashion}`}>Fashion</span>
                    <h3 className={styles.postTitle}>Fashion is a form of self-expression.</h3>
                    <div className={styles.detail}>
                        <span className={styles.userName}>Jatin Singh - </span>
                        <span className={styles.date}>14.09.2023</span>
                    </div>
                </div>
            </Link>

            <Link href="/" className={styles.item}>
                { withImage && (<div className={styles.imageContainer}>
                    <Image src="/food.jpeg" alt="" fill className={styles.image}/>
                </div>)}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.food}`}>Food</span>
                    <h3 className={styles.postTitle}>Food is essential for nourishment and pleasure.</h3>
                    <div className={styles.detail}>
                        <span className={styles.userName}>Jatin Singh - </span>
                        <span className={styles.date}>14.09.2023</span>
                    </div>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default MenuPosts
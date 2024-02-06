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
                    <Image src="" alt="" fill className={styles.image}/>
                </div>)}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.travel}`}>Travel</span>
                    <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur.</h3>
                    <div className={styles.detail}>
                        <span className={styles.userName}>Jatin Singh - </span>
                        <span className={styles.date}>14.09.2023</span>
                    </div>
                </div>
            </Link>

            <Link href="/" className={styles.item}>
               { withImage && (<div className={styles.imageContainer}>
                    <Image src="" alt="" fill className={styles.image}/>
                </div>)}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.culture}`}>Culture</span>
                    <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur.</h3>
                    <div className={styles.detail}>
                        <span className={styles.userName}>Jatin Singh - </span>
                        <span className={styles.date}>14.09.2023</span>
                    </div>
                </div>
            </Link>

            <Link href="/" className={styles.item}>
                { withImage && (<div className={styles.imageContainer}>
                    <Image src="" alt="" fill className={styles.image}/>
                </div>)}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.fashion}`}>Fashion</span>
                    <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur.</h3>
                    <div className={styles.detail}>
                        <span className={styles.userName}>Jatin Singh - </span>
                        <span className={styles.date}>14.09.2023</span>
                    </div>
                </div>
            </Link>

            <Link href="/" className={styles.item}>
                { withImage && (<div className={styles.imageContainer}>
                    <Image src="" alt="" fill className={styles.image}/>
                </div>)}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.food}`}>Food</span>
                    <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur.</h3>
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
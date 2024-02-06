import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image'

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
          <b className={styles.bold} >Hey, ThoughtCrafts here!</b>Discover people stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/featuredImage2.jpg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Blogging is like Bridging Writers and Readers for Meaningful Connections</h1>
          <p className={styles.postDesc}>ThoughtCrafts seamlessly integrates blogging and community engagement, offering writers a unified platform to share their stories and connect with readers. Join us to amplify your voice and foster meaningful connections today</p>
          <button className={styles.button}>Read more</button>
        </div>
      </div>
    </div>
  )
}

export default Featured
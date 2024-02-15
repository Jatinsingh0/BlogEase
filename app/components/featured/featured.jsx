import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image'

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
          <b className={styles.bold} >Hey, BlogEase here!</b>Discover people stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/featuredImage2.jpg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Blogging is like Bridging Writers and Readers for Meaningful Connections</h1>
          <p className={styles.postDesc}> "BlogEase is your ultimate destination for hassle-free blogging. With its user-friendly interface and intuitive features, BlogEase simplifies the process of creating, managing, and sharing your content. Whether you're a seasoned blogger or just starting out, BlogEase provides the tools you need to unleash your creativity and connect with your audience effortlessly</p>
          <button className={styles.button}>Read more</button>
        </div>
      </div>
    </div>
  )
}

export default Featured
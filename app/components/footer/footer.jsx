import React from 'react';
import styles from "./footer.module.css"
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={styles.container}>
    <div className={styles.info}>
      <div className={styles.logo}>
        <h1 className={styles.logoText}>BlogEase</h1>
      </div>
      <p className={styles.desc}>
      BlogEase is your ultimate destination for hassle free blogging. With its user friendly interface and intuitive features BlogEase simplifies the process of creating managing and sharing your content. 
      </p>
      <div className={styles.icons}>
        <Link href="https://www.linkedin.com/in/jatin-singh-a9147526b">
            <Image src="/linkdinLogo.png" alt="img" width={26} height={26}/>
        </Link>
        <Image src="/telegramLogo.jpeg" alt="" width={26} height={26} />
        <Link href="https://github.com/Jatinsingh0">
            <Image src="/github.png" alt="img" width={26} height={26}/>
        </Link>
        <Image src="/twitterLogo.png" alt="" width={26} height={26} />
      </div>
    </div>
    <div className={styles.links}>
      <div className={styles.list}>
        <span className={styles.listTitle}>Links</span>
        <Link href="/">Homepage</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className={styles.list}>
        <span className={styles.listTitle}>Tags</span>
        <Link href={"/blog?cat=sport"}>sports</Link>
        <Link href={"/blog?cat=fashion"}>Fashion</Link>
        <Link href={"/blog?cat=food"}>Food</Link>
        <Link href={"/blog?cat=travel"}>Travel</Link>
      </div>
      <div className={styles.list}>
        <span className={styles.listTitle}>Social</span>
        <Link href="https://github.com/Jatinsingh0">Github</Link>
        <Link href="https://www.linkedin.com/in/jatin-singh-a9147526b">Linkdin</Link>
      </div>
    </div>
  </div>
  )
}

export default Footer
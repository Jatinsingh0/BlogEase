import React from 'react'
import styles from "./menuCategories.module.css"
import Link from 'next/link'

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link href={"/blog?cat=sport"} className={`${styles.categoryItem} ${styles.style}`}>
        Sport
      </Link>
      <Link href={"/blog?cat=fashion"} className={`${styles.categoryItem} ${styles.fashion}`}>
        Fashion
      </Link>
      <Link href={"/blog?cat=food"} className={`${styles.categoryItem} ${styles.food}`}>
        Food
      </Link>
      <Link href={"/blog?cat=travel"} className={`${styles.categoryItem} ${styles.travel}`}>
        Travel
      </Link>
      <Link href={"/blog?cat=culture"} className={`${styles.categoryItem} ${styles.culture}`}>
        Culture
      </Link>
      <Link href={"/blog?cat=coding"} className={`${styles.categoryItem} ${styles.coding}`}>
        Coding
      </Link>
    </div>
  )
}

export default MenuCategories
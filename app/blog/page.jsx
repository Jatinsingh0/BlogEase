import CardList from "../components/cardList/cardList"
import styles from "./blogPage.module.css"
import Menu from "../components/menu/page"

const blogPage = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Travel Blog</h1>
        <div className={styles.content}>
            <CardList />
            <Menu />
        </div>
    </div>
  )
}

export default blogPage
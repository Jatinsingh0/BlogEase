import CardList from "../components/cardList/cardList"
import styles from "./blogPage.module.css"
import Menu from "../components/menu/page"

const blogPage = ({searchParams}) => {
  const page  = parseInt(searchParams.page) || 1;
  const category = searchParams.cat;
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>{`${category} Blogs`}</h1>
        <div className={styles.content}>
            <CardList page={page} cat={category}/>
            <Menu />
        </div>
    </div>
  )
}

export default blogPage
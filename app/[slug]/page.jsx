import Image from "next/image"
import Menu from "../components/menu/page"
import styles from "./singlePage.module.css"
import Comments from "../components/comments/Comments"

const singlePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <div className={styles.user}>
              <div className={styles.userImageContainer}>
                <Image src="" alt="" fill className={styles.avatar} />
              </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Jatin singh</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
          <div className={styles.imageContainer}>
            <Image src="" alt="" fill className={styles.image} />
          </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
            <div className={styles.description}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex saepe ipsum aliquam unde? Alias asperiores labore, nam sint exercitationem ex minus inventore sunt est, eos vero, cum cupiditate fugit. Explicabo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quia.
                </p>
                <h2>Lorem ipsum dolor sit amet consectetur.</h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex saepe ipsum aliquam unde? Alias asperiores labore, nam sint exercitationem ex minus inventore sunt est, eos vero, cum cupiditate fugit. Explicabo. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, delectus?
                </p>
                <h2>Lorem ipsum dolor sit amet consectetur.</h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex saepe ipsum aliquam unde? Alias asperiores labore, nam sint exercitationem ex minus inventore sunt est, eos vero, cum cupiditate fugit. Explicabo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, accusamus.
                </p>
            </div>
            <div className={styles.comment}>
                 <Comments />
            </div>
        </div>
        <Menu />
      </div>
    </div>
  )
}

export default singlePage
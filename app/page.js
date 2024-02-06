import React from "react";
import styles from "./page.module.css";
import Featured from "./components/featured/featured";
import CategoryList from "./components/categoryList/categoryList";
import CardList from "./components/cardList/cardList";
import Menu from "./components/menu/page";


const page = () => {
  return (
    <div className={styles.container}>
      
        <Featured />
        <CategoryList />
        <div className={styles.content}>
        <CardList />
        <Menu />
       </div>

    </div>
  );
};

export default page;

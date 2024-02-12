import React from "react";
import styles from "./page.module.css";
import Featured from "./components/featured/featured";
import CategoryList from "./components/categoryList/categoryList";
import CardList from "./components/cardList/cardList";
import Menu from "./components/menu/page";


const page = ({searchParams}) => {
  const page = parseInt(searchParams.page) || 1 ; 
  return (
    <div className={styles.container}>
      
        <Featured />
        <CategoryList />
        <div className={styles.content}>
        <CardList page={page}/>
        <Menu />
       </div>

    </div>
  );
};

export default page;

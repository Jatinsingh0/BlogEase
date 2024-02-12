import React from "react";
import styles from "./cardList.module.css";
import Card from "../card/card";
import Pagination from "../pagination/pagination";

const getData = async (page, cat) => {
  const res = await fetch(`https://blog-ease-jade.vercel.app/api/posts?page=${page}&cat=${cat || " "} `, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
};

const CardList = async ({ page, cat }) => {
  const {posts, count} = await getData(page, cat);

  const PostPerPage = 2;
  const hasPrev = PostPerPage * (page-1) > 0;
  const hasNext = PostPerPage * (page-1) + 2 < count;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts?.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CardList;

"use client"
import React, { useState } from "react";
import styles from "./contact.module.css";
import Image from "next/image";

const Contact = () => {

  const[name, setName] = useState("");
  const[email, setEmail] = useState("");
  const[message, setMessage] = useState("");

  const handelSubmit = (e) =>{
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
  }

   
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0k92-mUBuMT2g1c00PKCNuuWeCf1VIXCYseekQRKTUu437Uat6rEvP3qAHhUoNmH7mFk&usqp=CAU"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form} onSubmit={handelSubmit}>
          <input type="text" placeholder="name" className={styles.input} value={name} onChange={(e)=>setName(e.target.value)}/>
          <input type="text" placeholder="email" className={styles.input} value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <textarea
            className={styles.textArea}
            placeholder="message"
            cols="30"
            rows="10"
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
          ></textarea>
          <button type="submit" className={styles.button}>submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
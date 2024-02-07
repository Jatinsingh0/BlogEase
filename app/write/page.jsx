"use client"

import { useState } from "react";
import dynamic from "next/dynamic"; // Import dynamic from next/dynamic
import styles from "./writePage.module.css";
import Image from "next/image";

// Dynamically import ReactQuill
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.input} />
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src="" alt="" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <Image src="" alt="" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="" alt="" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="" alt="" width={16} height={16} />
            </button>
          </div>
        )}
        {/* Render ReactQuill only on the client-side */}
        {typeof window !== "undefined" && (
          <ReactQuill
            className={styles.textArea}
            theme="bubble"
            value={value}
            onChange={setValue}
            placeholder="Tell your story..."
          />
        )}
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
  );
};

export default WritePage;
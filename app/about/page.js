import React from "react";
import Image from "next/image";
import styles from "./about.module.css";
import Link from "next/link";

export const metadata = {
  title: "About",
  description: "This is a About page",
};

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            We are a passionate team committed to revolutionizing the blogging
            experience. With a focus on user empowerment and simplicity, we
            strive to provide a platform that enables individuals to share their
            stories effectively. Our dedication to innovation drives us to
            continually enhance our features, ensuring that users have the best
            tools at their disposal to unleash their creativity and connect with
            their audience.
            <br />
            <br />
            we believe in the power of storytelling to shape the digital
            landscape. Our team is composed of diverse talents united by a
            shared vision: to democratize the art of blogging and make it
            accessible to everyone.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            We offer an intuitive interface and a comprehensive suite of tools
            designed to simplify the process of creating managing and sharing
            blog content. Our mission is to empower users whether seasoned
            bloggers or beginners to effortlessly express their thoughts ideas
            and stories with the world. With BlogEase writing becomes a seamless
            and enjoyable endeavor allowing users to focus on what truly matters
            sharing their unique voice and connecting with their audience.
            <br />
            <br /> - Simplifies content management and sharing processes.
            <br />
            <br /> - Thoughts ideas and stories
            <br />
            <br /> - Empowers users to focus on expressive storytelling.
          </p>
          <Link href="/contact">
            <button type="submit" className={styles.button}>
              Contact
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from 'react'
import styles from '../styles/Home.module.scss'
import Profile from '../assets/images/profile.jpg'
import Image from 'next/image'

const HomeWeb = () => (
  <div className={styles.introBox}>
    <div className={styles.infoSection}>
      <Image className={styles.profile} src={Profile} alt={"Picture of me (Jeff Ma)"} width={177} height={177} />
      <div className={styles.infoTextSection}> 
        <h1 className={styles.fullName}>{"Jeff Ma"}</h1>
        <p>{"Web / Fullstack / Mobile Developer"}</p>
        <p className="textGray"> {"3rd Year Computer Engineering at University of Waterloo"}</p>
      </div>
    </div>
    <div className={styles.blurbSection}>
      <p>{"Hi, I’m Jeff! I’m an avid software and hardware developer who loves putting together the latest technologies and creating big things. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting"}</p>
    </div>
  </div>
);

export default HomeWeb;
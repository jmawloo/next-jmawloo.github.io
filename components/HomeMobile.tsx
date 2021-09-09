import React from 'react'
import styles from '../styles/Home.module.scss'
import Profile from '../assets/images/profile.jpg'
import Image from 'next/image'

const HomeMobile = () => (
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
      <p>{"This is a mobile view"}</p>
    </div>
  </div>
);

export default HomeMobile;
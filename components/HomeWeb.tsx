import React from 'react'
import styles from '../styles/Home.module.scss'
import Profile from '../assets/images/profile.jpg'
import Image from 'next/image'

import LinkedInIcon from '@material-ui/icons/LinkedIn'
import ResumeIcon from '@material-ui/icons/AssignmentInd'
import GitHubIcon from '@material-ui/icons/GitHub'

import ContactItem, { ContactItemType } from './ContactItem'

import { IntroCopies } from '../copies/HomeWebCopy'

const ContactProps: ContactItemType[] = [
  {Icon: ResumeIcon, label: "Resume", link: "/uploads/resume/resume.pdf#toolbar=0"},
  {Icon: LinkedInIcon, label: "LinkedIn", link: "https://www.linkedin.com/in/jma-wloo"},
  {Icon: GitHubIcon, label: "GitHub", link: "https://github.com/jmawloo"}
]

const HomeWeb = () => (
  <div className={styles.introBox}>
    <div className={styles.infoSection}>
      <Image className={styles.profile} src={Profile} alt={"Picture of me (Jeff Ma)"} width={177} height={177} />
      <div className={styles.infoTextSection}> 
        <h1 className={styles.fullName}>{IntroCopies.FULL_NAME}</h1>
        <p>{IntroCopies.ROLES}</p>
        <p className="gray">{IntroCopies.PROGRAM}</p>
      </div>
      <div className={styles.contactSection}>
        {ContactProps.map((prop: ContactItemType) => {
          return <ContactItem {...prop} key={prop.label} />
        })}
      </div>
    </div>
    <div className={styles.blurbSection}>
      {IntroCopies.BLURB.map((para: string, i: number) => {
        return <p key={i} className="line-space justify">{para}</p>;
      })}
    </div>
  </div>
);

export default HomeWeb;
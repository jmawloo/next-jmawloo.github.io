import React from 'react'
import styles from '../styles/Home.module.scss'

export type ContactItemType = {
  link: string,
  label: string,
  Icon: any,
}

const ContactItem = ({link, label, Icon} : ContactItemType) => (
  <div className={styles.contactItem}>
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Icon className={styles.contactIcon} />
    </a>
    <p className="gray bold">{label}</p>
  </div>
);

export default ContactItem;

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Profile from '../assets/images/profile.jpg'

// TODO: Logic here to separate web from mobile view component.

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jeff Ma: About Me</title>
        <meta name="description" content="My personal projects, experiences and skills/interests" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
{/* Body */}
      <main className={styles.main}>
        <div className={styles.introBox}>
          <div className={styles.infoSection}>
            <Image className={styles.profile} src={Profile} alt={"Picture of me (Jeff Ma)"} width={177} height={177} />
            <div className={styles.infoTextSection}> 
              <h1 className={styles.fullName}>{"Jeff Ma"}</h1>
              <p>{"Web / Fullstack / Mobile Developer"}</p>
              <p className="textGray"> {"3rd Year Computer Engineering at University of Waterloo"}</p>
            </div>
            
          </div>
          
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home

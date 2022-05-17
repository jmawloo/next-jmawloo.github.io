import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";

import styles from "../styles/Home.module.scss";

import HomeWeb from "../components/HomeWeb";
// import HomeMobile from '../components/HomeMobile'

// TODO: Logic here to separate web from mobile view component.
export const getServerSideProps: GetServerSideProps = async (context) => {
  // User agent code from https://stackoverflow.com/a/60146925
  const userAgent = context.req.headers["user-agent"];
  const isMobile = userAgent
    ? Boolean(
        userAgent.match(
          /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
        )
      )
    : false;
  return {
    props: {
      deviceType: isMobile ? "mobile" : "desktop",
    },
  };
};

const Home: NextPage = (/*{props}*/) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jeff Ma: About Me</title>
        <meta
          name="description"
          content="My personal projects, experiences and skills/interests"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Body */}
      <main className={styles.main}>
        {/* {props.deviceType === "mobile" ? 
          <HomeMobile /> : 
          <HomeWeb />
        } */}
        <HomeWeb />
      </main>

      {/* <footer className={styles.footer}>
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
      </footer> */}
    </div>
  );
};

export default Home;

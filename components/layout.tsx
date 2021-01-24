
import Head from "next/head";
import Link from "next/link";

export const siteTitle = "Earth Foundation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/layout.module.scss";

export default function Layout({ children, home }: { children: React.ReactNode, home ? : boolean }) {
  return (
    <div className = {styles.container}>

      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Learn how to build a personal website using Next.js" />
        <meta property="og:image" content={`https://og-image.now.sh/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`} />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header className = {styles.header}>
        <nav className = {styles.navigation}>
          <img className = {styles.logo} src = "/images/logo.png" />
          <div className = {styles.links}>
            <Link href = "/about-us">
              <span className = {styles.mySpan}>About Us</span>
            </Link>
            <Link href = "/our-initiatives">
              <span className = {styles.mySpan}>Our Initiatives</span>
            </Link>
            <Link href = "/news">
              <span className = {styles.mySpan}>News</span>
            </Link>
            <Link href = "/get-involved">
              <span className = {styles.mySpan}>Get Involved</span>
            </Link>
            <div className = {styles.searchIcon}>
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </div>
        </nav>
      </header>

      <div>{children}</div>

    </div>
  );
};

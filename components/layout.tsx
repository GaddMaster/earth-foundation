
import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Daniel Gadd";
export const siteTitle = "Earth Foundation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Layout({ children, home }: { children: React.ReactNode, home ? : boolean }) {
  return (
    <div className={styles.container}>

      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js" />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`} />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header className = {styles.header}>
        <div className = "logo">
          <img src = "/images/logo.png" />
        </div>
        <div className = "navigation-container">
          <nav className = "navigation">
            <Link href = "/about-us">
              <span>About Us</span>
            </Link>
            <Link href = "/our-initiatives">
              <span>Our Initiatives</span>
            </Link>
            <Link href = "/news">
              <span>News</span>
            </Link>
            <Link href = "/get-involved">
              <span>Get Involved</span>
            </Link>
          </nav>
          <div className = "search-icon">
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
      </header>

      <div className="py-20">
        <h1 className="text-5xl text-center text-gray-700 dark:text-gray-100">
          Next.js + Tailwind CSS 2.0
        </h1>
      </div>

      <div>{children}</div>

    </div>
  );
};

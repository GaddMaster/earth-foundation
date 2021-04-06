import Layout from "components/Layout";
import styles from "styles/thank-you-mentors.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import SlideSection from 'components/SlideSection';
import SlideSocials from 'components/SlideSocials';
import React from 'react';
import {useRouter} from 'next/router';
import Head from 'next/head';

const ThankYou = () => {
    const router = useRouter();

    return (
      <>
          <Head>
              <title>Thank you!</title>
              <meta name="og:title" property="og:title" content="Thank you!" />
              <meta name="og:image" content="/images/logo.png" />
          </Head>
        <Layout
            title = "Thank you"
            header
        >
            <div className={styles.container}>
                <SlideSection height={20} name="The Earth Prize Mentors" color="#FFFFFF" />
                <SlideSocials color="#FFFFFF" />
                <div className = {styles.title}>
                    <h1>Thank you!</h1>
                </div>
                <div className={styles.divider} />
                <div className = {styles.sub}>
                    <span>Thank you for applying to become a mentor for The Earth Prize.</span>
                </div>
                <div className = {styles.text}>
                    <span>Our team will review your application and contact you as soon as possible to further discuss this opportunity.</span>
                </div>
                <Link href = "/">
                    <div className={styles.back}>
                        <span>back to home page</span>
                        <FontAwesomeIcon icon = {faArrowRight} />
                    </div>
                </Link>
            </div>
        </Layout>
      </>
    );
};

export default ThankYou;

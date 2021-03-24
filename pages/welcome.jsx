
import Link from "next/link";
import { useRouter } from "next/router";

import Layout from "components/Layout";

import ButtonBase from "@material-ui/core/ButtonBase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import styles from "styles/welcome.module.scss";
import SlideSection from 'components/SlideSection';
import SlideSocials from 'components/SlideSocials';
import Head from 'next/head';
import React from 'react';

const Welcome = () => {
    const router = useRouter();
    return (
      <>
          <Head>
              <title>Welcome to our community</title>
          </Head>
        <Layout
            title = "Welcome to our community"
            header>
            <div className = {styles.container}>
                <SlideSection height={45} name="Welcome" color="#FFFFFF" />
                <SlideSocials color="#FFFFFF" />
                <div className = {styles.title}>
                    <div>Welcome to</div>
                    <div>our community!</div>
                </div>
                <div className={styles.divider}></div>
                <div className = {styles.sub}>
                    <span>We are excited to have you on board. <br /> How would you like to get involved?</span>
                </div>
                <ButtonBase
                    className = {styles.button}
                    onClick = {() => router.push("https://theearthfoundation.typeform.com/to/iuEsLDX4")}>
                    <span>take a short survey</span>
                </ButtonBase>
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

export default Welcome;

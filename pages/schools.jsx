
import Layout from "../components/Layout";

import styles from "styles/schools.module.scss";
import SlideSection from 'components/SlideSection';
import SlideSocials from 'components/SlideSocials';
import React from 'react';
import content from "assets/content";
import Subscribe from 'components/Subscribe';
import Head from 'next/head';
import Link from 'next/link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';


const Schools = () => {
    return (
      <>
        <Head>
          <title>The Earth Prize Participating Schools</title>
          <meta name="og:title" property="og:title" content="The Earth Prize Participating Schools" />
          <meta name="og:image" content="/images/logo.png" />
        </Head>
        <Layout
            title = "The Earth <br/> Prize Participating Schools"
            background = "whitesmoke"
            header
            footer
        >
            <SlideSection height={35} name="The Earth Prize Participating Schools" color="#CEAA7A" />
            <SlideSocials color="#CEAA7A" style={{ top: '220px' }} />
            <div className = {styles.wrapper}>
                <div className = {styles.container}>
                    <h1 className={styles.title}>The Earth Prize <br />Participating Schools
                    </h1>
                  <div className={styles.seperator} />
                    <p className={styles.text}>Education is a key aspect in enabling our societies to become sustainable. Indeed, it is in schools that the young generation finds inspiration and develops important values to become fruitful members of society. The Earth Prize offers students a unique opportunity to learn about environmental sustainability and to access a platform for their innovative ideas. In keeping with this goal, The Earth Prize is honored to be supported by schools all over the world.</p>
                  <p className={styles.subtitle}>Below are some of the schools which have confirmed their participation in The Earth Prize.</p>
                  <div className={styles.seperatorLong} />
                  <div className = {styles.link}>
                    <Link href="https://www.theearthprize.org">
                      <div className = {styles.label}>
                        Find out how to get involved
                      </div>
                    </Link>
                    <FontAwesomeIcon icon = {faArrowRight} />
                  </div>
                  <div className={styles.logosWrapper}>
                    {content.schools.map(school => (
                      <a href={school.url} key={school.url} target="_blank"><div style={{ backgroundImage: `url(${school.image})` }} /></a>
                    ))}
                  </div>
                </div>
            </div>
            <Subscribe
              background = {{
                  outer: "whitesmoke",
                  inner: "white"
              }} />
        </Layout>
      </>
    );
};

export default Schools;

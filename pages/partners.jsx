import Layout from "../components/Layout";

import styles from "styles/partners.module.scss";
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
          <title>The Earth Foundation Partners</title>
          <meta name="og:title" property="og:title" content="The Earth Foundation Partners" />
          <meta name="og:image" content="/images/logo.png" />
        </Head>
        <Layout
            title = "Our Partners"
            background = "whitesmoke"
            header
            footer
        >
            <SlideSection height={35} name="Our Partners" color="#CEAA7A" />
            <SlideSocials color="#CEAA7A" style={{ top: '220px' }} />
            <div className = {styles.wrapper}>
                <div className = {styles.container}>
                    <h1 className={styles.title}>Strategic Partners
                    </h1>
                  <div className={styles.seperator} />
                    <p className={styles.text}>Achieving environmental sustainability objectives calls for collective action. This is one of the fundamental principles of The Earth Foundation. In keeping with its goal of building an ecosystem that accelerates positive change, The Earth Foundation has developed mutually beneficial partnerships with numerous international organizations, institutions, and entrepreneurs which share its goals, values, and commitment to protecting the planet.</p>
                  <p className={styles.subtitle}>The Earth Foundation is proud to have joined forces with the following Strategic Partners to boost the long-lasting impact of its initiatives.</p>
                  <div className={styles.seperatorLong} />
                  <p className={styles.text} style={{ marginBottom: '30px' }}>Is your organization interested in partnering with us?</p>
                  <div className = {styles.link}>
                    <Link href="/contact-us">
                      <div className = {styles.label}>
                        Find out more
                      </div>
                    </Link>
                    <FontAwesomeIcon icon = {faArrowRight} />
                  </div>
                  <div className={styles.logosWrapper}>
                    {content.partners.map(partner => (
                      <a key={partner.url} href={partner.url} target="_blank"><div style={{ backgroundImage: `url(${partner.image})` }}/></a>
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

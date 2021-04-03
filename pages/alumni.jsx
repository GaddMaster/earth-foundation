
import Layout from "../components/Layout";

import styles from "styles/alumni.module.scss";
import SlideSection from 'components/SlideSection';
import SlideSocials from 'components/SlideSocials';
import React from 'react';
import Subscribe from 'components/Subscribe';
import Head from 'next/head';
import {useMediaQuery} from 'react-responsive';
import TitleDesc from 'components/TitleDesc';

const Alumni = () => {
  const isMobile = useMediaQuery({
    query: `(max-width: 600px)`,
  });
    return (
      <>
        <Head>
          <title>The Earth Foundation Alumni Association</title>
          <meta name="description" content="A platform for networking and encouragement amongst our community of passionate and inspiring individuals. The Earth Foundation Alumni Association will strengthen ties among its members, offering them support through access to educational content, mentorship, social events, and professional opportunities."/>
          <meta name="og:title" property="og:title" content="The Earth Foundation Alumni Association" />
          <meta name="og:image" content="/images/logo.png" />
          <meta name="og:description" property="og:description" content="A platform for networking and encouragement amongst our community of passionate and inspiring individuals. The Earth Foundation Alumni Association will strengthen ties among its members, offering them support through access to educational content, mentorship, social events, and professional opportunities." />
        </Head>
        <Layout 
            title = "The Earth Foundation Alumni Association"
            background = "whitesmoke"
            header
            footer
        >
            <SlideSection height={35} name="The Earth Foundation Alumni Association" color="#CEAA7A" />
            <SlideSocials color="#CEAA7A" style={{ top: '220px' }} />
            <div className = {styles.wrapper}>
                <div className = {styles.container}>
                  <TitleDesc
                    paragraphs = {[
                      "A platform for networking and encouragement amongst our community of passionate and inspiring individuals. The Earth Foundation Alumni Association will strengthen ties among its members, offering them support through access to educational content, mentorship, social events, and professional opportunities.",
                    ]}
                    color = {{
                      title: "#16172C",
                      desc: "#16172C"
                    }}
                  >
                    {isMobile
                      ? <h1>The Earth Foundation Alumni Association</h1>
                      : <h1>The Earth<br /> Foundation<br /> Alumni<br /> Association</h1>
                    }
                  </TitleDesc>
                  <div className={styles.content}>
                    <div className={styles.image} />
                    <div className={styles.textWrapper}>
                      <p>All participants in The Earth Prize,<br /> The Earth Foundation Awards, and<br /> The Earth Foundation Incubator<br /> will be automatically enrolled<br /> in The Earth Foundation<br /> Alumni Association.</p>
                      <div className={styles.launchWrapper}>
                        <div className={styles.line} />
                        <p className={styles.launch}>Launching<br /> in 2022.</p>
                      </div>
                    </div>
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

export default Alumni;

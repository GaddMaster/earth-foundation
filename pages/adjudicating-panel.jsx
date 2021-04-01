
import Layout from "../components/Layout";

import styles from "styles/adjudicating.panel.module.scss";
import SlideSection from 'components/SlideSection';
import SlideSocials from 'components/SlideSocials';
import React from 'react';
import content from "assets/content";
import Subscribe from 'components/Subscribe';
import PersonViewer from 'components/PersonViewerCarousel';
import Head from 'next/head';
import {useMediaQuery} from 'react-responsive';

const AdjudicatingPanel = () => {
  const isMobile = useMediaQuery({
    query: `(max-width: 600px)`,
  });
    return (
      <>
        <Head>
          <title>The Adjudicating Panel</title>
          <meta name="description" content="The Adjudicating Panel is made up of highly renowned experts with backgrounds in corporate sustainability, academia, entrepreneurship, conservation, and communications. The Adjudicating Panel will adjudicate upon The Earth Prize."/>
          <meta name="og:title" property="og:title" content="The Adjudicating Panel" />
          <meta name="og:image" content="/images/logo.png" />
          <meta name="og:description" property="og:description" content="The Adjudicating Panel is made up of highly renowned experts with backgrounds in corporate sustainability, academia, entrepreneurship, conservation, and communications. The Adjudicating Panel will adjudicate upon The Earth Prize." />
        </Head>
        <Layout 
            title = "The Earth <br/> Prize"
            background = "whitesmoke"
            header
            footer
        >
            <SlideSection height={35} name="The Adjudicating Panel" color="#CEAA7A" />
            <SlideSocials color="#CEAA7A" style={{ top: '220px' }} />
            <div className = {styles.wrapper}>
                <div className = {styles.container}>
                    <div className={styles.titleWrapper}>
                      <div>
                        {isMobile
                          ? <h1 className={styles.title}>The<br /> Adjudicating<br /> Panel</h1>
                          : <h1 className={styles.title}>The Adjudicating Panel</h1>
                        }
                        <div className={styles.divider} />
                        <p className={styles.subtitle}>The Earth Prize’s Adjudicating Panel is made up of highly renowned experts with backgrounds in corporate sustainability, academia, entrepreneurship, conservation, and communications.<br /><br />The Adjudicating Panel will adjudicate upon The Earth Prize.</p>
                      </div>
                      <div className={styles.image} />
                    </div>
                    <PersonViewer
                      title = "Members"
                      items = {content.adjudicatingPanel.team}
                      theme = {{
                          title : "#064C40",
                          header : "#FDFEFE",
                          position: "#FDFEFE",
                          paragraph: "#FDFEFE",
                          background: "#064D3F"
                      }} />
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

export default AdjudicatingPanel;

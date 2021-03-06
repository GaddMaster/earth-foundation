
import Layout from "../components/Layout";

import styles from "styles/webinar.module.scss";
import SlideSection from 'components/SlideSection';
import SlideSocials from 'components/SlideSocials';
import React from 'react';
import content from "assets/content";
import Subscribe from 'components/Subscribe';
import Link from 'next/link';
import PersonViewer from 'components/PersonViewerCarousel';
import Head from 'next/head';


const Webinar = () => {
    return (
      <>
        <Head>
          <title>The Earth Prize Launch Webinar</title>
          <meta name="description" content="Join our launch webinar to learn more about The Earth Foundation, The Earth Prize, and how we will inspire and empower  young students to develop innovative ideas to accelerate positive change towards environmental sustainability."/>
          <meta name="og:title" property="og:title" content="The Earth Prize Launch Webinar" />
          <meta name="og:image" content="/images/logo.png" />
          <meta name="og:description" property="og:description" content="Join our launch webinar to learn more about The Earth Foundation, The Earth Prize, and how we will inspire and empower  young students to develop innovative ideas to accelerate positive change towards environmental sustainability." />
        </Head>
        <Layout
            title = "The Earth <br/> Prize"
            background = "whitesmoke"
            header
            footer
        >
            <SlideSection height={35} name="Launch webinar" color="#CEAA7A" />
            <SlideSocials color="#CEAA7A" style={{ top: '220px' }} />
            <div className = {styles.wrapper}>
                <div className = {styles.container}>
                    <h1 className={styles.title}>The Earth Prize <br />Launch Webinar
                    </h1>
                    <p className={styles.text}>Watch The Earth Prize Launch Webinar  to learn more about The Earth Foundation, and how The Earth Prize, and how we will inspire and empower young students to develop innovative ideas to accelerate positive change towards.</p>
                  <Link href="https://www.youtube.com/watch?v=_dLft2yTT_c&t=18s">
                        <button className={styles.button}>Watch The Earth Prize Launch Webinar</button>
                    </Link>
                  <div className={styles.hostedWrapper}>
                    <div className={styles.textWrapper}>
                      <p>Hosted by</p>
                      <p>Sir Ranulph Fiennes</p>
                      <p>Described in 1984 as the ‘World’s Greatest Living Explorer’ by the Guinness Book of Records, Sir Ranulph Twisleton-Wykeham Fiennes is the first explorer to be awarded a double clasp Polar Medal by Her Majesty the Queen, acknowledging both his Arctic and Antarctic achievements. At the age of 65, Sir Ranulph became the oldest Briton to conquer Mount Everest, raising more than GBP2.5 million for Marie Curie Cancer Care. His expeditions have raised millions for the Multiple Sclerosis Society, which has enabled the building of Europe’s first MS Research Centre in Cambridge. In 1993 he was awarded an OBE for ‘human endeavor and charitable services’. Sir Ranulph is also the author of several books and holds the current world record as being the only person ever to have climbed Mount Everest and crossed both Antarctica and the Arctic Ocean via the Poles.</p>
                    </div>
                    <div className={styles.image} />
                  </div>
                    <PersonViewer
                      title = "Event Speakers"
                      items = {content.webinar.team}
                      theme = {{
                          title : "#CFAB79",
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

export default Webinar;

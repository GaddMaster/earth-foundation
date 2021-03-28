
import Layout from "../components/Layout";

import styles from "styles/webinar.module.scss";
import SlideSection from 'components/SlideSection';
import SlideSocials from 'components/SlideSocials';
import React, {useEffect, useState} from 'react';
import {useMediaQuery} from 'react-responsive';
import content from "assets/content";
import Subscribe from 'components/Subscribe';
import Link from 'next/link';
import PersonViewer from 'components/PersonViewerCarousel';
import Head from 'next/head';


const Webinar = () => {
    const isMobile = useMediaQuery({
        query: `(max-width: 600px)`,
    });
    const [activeSectionIndex, setActiveSectionIndex] = useState(0);

    useEffect(() => {
        if (isMobile) {
            setActiveSectionIndex(null);
        }
    }, [isMobile]);

    return (
      <>
        <Head>
          <title>Launch Webinar</title>
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
                    <h1 className={styles.title}>Launch Webinar</h1>
                    <p className={styles.subtitle}>The Earth Foundation will officially launch The Earth Prize on April 19th, 2021.</p>
                    <p className={styles.text}>Join our launch webinar to learn more about The Earth Foundation and The Earth Prize, and how we will encourage and support young students to develop innovative ideas to accelerate positive change towards environmental sustainability.</p>
                    <Link href="https://theearthfoundation.typeform.com/to/vGnZsu9o">
                        <button className={styles.button}>Register for The Earth Prize Launch Webinar!</button>
                    </Link>
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


import Layout from "../components/Layout";

import styles from "styles/faqs.earth.prize.module.scss";
import SlideSection from 'components/SlideSection';
import SlideSocials from 'components/SlideSocials';
import React, {useEffect, useState} from 'react';
import {useMediaQuery} from 'react-responsive';
import content from "assets/content";
import Subscribe from 'components/Subscribe';


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
        <Layout 
            title = "The Earth <br/> Prize"
            background = "whitesmoke"
            header
            footer
        >
            <SlideSection height={35} name="The Earth Prize FAQS" color="#CEAA7A" />
            <SlideSocials color="#CEAA7A" style={{ top: '220px' }} />
            <div className = {styles.wrapper}>
                <div className = {styles.container}>
                    <p className={styles.subtitle}>Frequently Asked Questions on The Earth Prize</p>
                    <h1 className={styles.title}>FAQs</h1>
                    <div className={styles.divider} />
                </div>
            </div>
            <Subscribe
              background = {{
                  outer: "whitesmoke",
                  inner: "white"
              }} />
        </Layout>
    );
};

export default Webinar;

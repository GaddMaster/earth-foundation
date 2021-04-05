
import Layout from "../components/Layout";

import styles from "styles/faqs.mentors.module.scss";
import SlideSection from 'components/SlideSection';
import SlideSocials from 'components/SlideSocials';
import FAQ from 'components/FAQ';
import React, {useEffect, useState} from 'react';
import {useMediaQuery} from 'react-responsive';
import content from "assets/content";
import Subscribe from 'components/Subscribe';
import Head from 'next/head';


const FAQSEarthPrize = () => {
    const isMobile = useMediaQuery({
        query: `(max-width: 600px)`,
    });
    const [activeSectionIndex, setActiveSectionIndex] = useState(0);

    useEffect(() => {
        if (isMobile) {
            setActiveSectionIndex(null);
        }
    }, [isMobile]);

    const handleOnSectionClick = index => {
        if (isMobile) {
            if (index === activeSectionIndex) {
                setActiveSectionIndex(null);
            } else {
                setActiveSectionIndex(index);
            }
        } else {
            setActiveSectionIndex(index);
        }
    }

    return (
      <>
          <Head>
              <title>Frequently Asked Questions on The Earth Prize Mentors</title>
              <meta name="description" content="Frequently Asked Questions"/>
              <meta name="og:title" property="og:title" content="Frequently Asked Questions on The Earth Prize Mentors" />
              <meta name="og:image" content="/images/logo.png" />
              <meta name="og:description" property="og:description" content="Frequently Asked Questions" />
          </Head>
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
                    {isMobile
                      ? (
                        <p className={styles.subtitle}>
                            The Earth Prize Mentors Frequently Asked Questions
                        </p>
                      )
                      : (
                        <p className={styles.subtitle}>
                            The Earth Prize Mentors <br /> Frequently Asked Questions
                        </p>
                      )
                    }
                    <h1 className={styles.title}>FAQs</h1>
                    <div className={styles.divider} />
                    <div className={styles.faqs}>
                        <div className={styles.sections}>
                            {content.faqsMentors.map((item, index) => (
                              <>
                                  <div
                                    key={item.sectionName}
                                    className = {`${styles.section} ${(index === activeSectionIndex) && styles.active}`}
                                    onClick={() => handleOnSectionClick(index)}
                                  >
                                      {item.sectionName}
                                  </div>
                                  {isMobile && index === activeSectionIndex && (
                                    <div className={styles.answers}>
                                        {item.faqs.map(faq => (
                                          <FAQ key={faq.question} question={faq.question} answer={faq.answer} />
                                        ))}
                                    </div>
                                  )}
                              </>
                            ))}
                        </div>
                        {!isMobile && (
                          <div className={styles.answers}>
                              {content.faqsMentors[activeSectionIndex]?.faqs.map(faq => (
                                <FAQ key={faq.question} question={faq.question} answer={faq.answer} />
                              ))}
                          </div>
                        )}
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

export default FAQSEarthPrize;

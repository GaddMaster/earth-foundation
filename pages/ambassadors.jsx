
import Layout from "../components/Layout";
import TitleDesc from "components/TitleDesc";
import Subscribe from "../components/Subscribe";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import styles from "styles/ambassadors.module.scss";
import SlideSection from 'components/SlideSection';
import SlideSocials from 'components/SlideSocials';
import Link from 'next/link';
import React from 'react';
import {useMediaQuery} from 'react-responsive';
import content from '../assets/content';
import Head from 'next/head';

const Ambassadors = () => {
    const isMobile = useMediaQuery({
        query: `(max-width: 600px)`,
    });

    const isOdd = number => number % 2;

    return (
      <>
          <Head>
              <title>The Earth Prize Ambassadors</title>
          </Head>
        <Layout 
            title = "The Earth Prize Ambassadors"
            background = "whitesmoke"
            header
            footer
        >
            <SlideSection name="The Earth Prize Ambassadors" color="#CEAA7A" />
            <SlideSocials color="#CEAA7A" style={{ top: '220px' }} />
            <div className = {styles.wrapper}>
                <div className = {styles.container}>
                    <TitleDesc
                      paragraphs = {(<p>The Earth Prize Ambassadors are inspiring individuals with a strong passion for environmental sustainability, eager to spread the word about The Earth Foundation initiatives. These Ambassadors will also accompany The Earth Prize Finalists throughout their social media engagement campaign, helping them raise awareness about their projects and increasing their potential for impact.</p>
                      )}
                      color = {{
                          title: "#17152B",
                          desc: "#17152B"
                      }}
                    >
                        {isMobile
                          ? <h1>The<br /> Earth Prize<br /> Ambassadors</h1>
                          : <h1>The Earth Prize<br /> Ambassadors</h1>
                        }
                    </TitleDesc>
                    <div className = {styles.ambassadorsWrapper}>
                        {content.ambassadors.map((ambassador, index) => (
                          <div className = {`${styles.ambassador} ${isOdd(index) && styles.reversed}`}>
                              <p className = {styles.name}>{ambassador.name}</p>
                              <p className = {styles.position}>{ambassador.position}</p>
                              <Link href="">
                                <span>
                                  Learn More
                                  <span className = {styles.icon}>
                                    <FontAwesomeIcon icon = {faArrowRight} />
                                  </span>
                                </span>
                              </Link>
                              <div className = {styles.avatar} />
                          </div>
                        ))}
                    </div>
                    <Subscribe
                      background = {{
                          outer: "whitesmoke",
                          inner: "white"
                      }} />
                </div>
            </div>
        </Layout>
      </>
    );
};

export default Ambassadors;

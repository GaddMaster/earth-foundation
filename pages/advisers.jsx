
import Layout from "../components/Layout";
import TitleDesc from "components/TitleDesc";

import styles from "../styles/advisers.module.scss";
import Subscribe from "../components/Subscribe";
import React from 'react';
import SlideSection from 'components/SlideSection';
import SlideSocials from 'components/SlideSocials';
import {useMediaQuery} from 'react-responsive';

const Advisers = () => {
    const isMobile = useMediaQuery({
      query: `(max-width: 600px)`,
    });
    return (
        <Layout
          title = "The Earth Foundation Advisers"
          background = "whitesmoke"
          header
          footer
        >
          <SlideSection height={35} name="The Earth Foundation Advisors" color="#CEAA7A" />
          <SlideSocials color="#CEAA7A" style={{ top: '220px' }} />
          <div className = {styles.container}>
            <TitleDesc
              paragraphs = {[
                "The Earth Foundation’s mission is to inspire, educate, mentor, and empower youth to accelerate positive change towards environmental sustainability. In achieving this mission, The Earth Foundation has surrounded itself with renowned experts in the field of environmental sustainability, to help guide its strategic development."
              ]}
              color = {{
                title: "#17152B",
                desc: "#17152B"
              }}
            >
              {isMobile
                ? <h1>The Earth Foundation Advisors</h1>
                : <h1>The Earth<br /> Foundation<br /> Advisors</h1>
              }
            </TitleDesc>
            <div className = {styles.cards}>
              <div className = {styles.card}>
                <div className = {styles.photo} />
                <h4 className={styles.title}>Mario Salomone</h4>
                <h6 className={styles.position}>Position Here</h6>
                <p className={styles.description}>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  "
                </p>
              </div>
              <div className = {styles.card}>
                <div className = {styles.photo} />
                <h4 className={styles.title}>Mario Salomone</h4>
                <h6 className={styles.position}>Position Here</h6>
                <p className={styles.description}>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  "
                </p>
              </div>
            </div>
          </div>
        <Subscribe />
        </Layout>
    );
};

export default Advisers;

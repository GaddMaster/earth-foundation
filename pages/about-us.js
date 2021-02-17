import React, { PureComponent } from "react";
import Head from "next/head";
import { motion } from "framer-motion";

import Layout from "../components/Layout";
import Switcher from "../components/Switcher";
import Section from "../components/Section";
import ContentSection from "../components/ContentSection";
import Subscribe from "../components/Subscribe";

import styles from "../styles/about.module.scss";

import foundation from "../assets/foundation";

class AboutUs extends PureComponent {

  render = () => {

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
        <Head>
          <title>The Earth Foundation | About Us | Landing</title>
        </Head>

        <Layout title="The Earth Foundation Background">
          <Section
            cover="/images/jeremy-bishop-dR_q93lfaTw-unsplash.jpg"
            title="The Earth Foundation Background"
            paragraphs={[
              "The passion and concern that young people have about environmental sustainability became very evident during the series of global school strikes which spread across the world in 2019, inspired by the actions of environmental activist Greta Thunberg."
            ]} />

          <ContentSection
            image="/images/about_inspire_generation.png"
            paragraphs={[
              "The Earth Foundation will take this enthused youth and​ inspire, educate, mentor, and empower it to effect real change and hopefully, in turn, embolden the following generation."
            ]} />


          <Switcher 
            title="The Earth Foundation Board" 
            data={foundation.board} 
            themeColor="#16172C" 
            titleColor="#16172C" 
            boardTitleColor="#CFAA7A"/>

          <Switcher 
            title="The Earth Foundation Team" 
            data={foundation.team} 
            titleColor="#CFAA7A" />


          <Subscribe />
        </Layout>
      </motion.div>
    )
  }
}


export default AboutUs;
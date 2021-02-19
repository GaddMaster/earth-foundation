
import React, { PureComponent } from "react";
import Head from "next/head";
import { motion } from "framer-motion";

import Layout from "../components/Layout";
import Switcher from "../components/Switcher";
import BlueSwitcher from "../components/BlueSwitcher";
import Section from "../components/Section";

import foundation from "../assets/foundation";

import styles from "../styles/about.module.scss";

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


          <section className={styles.section}>
            <div className={styles.cover} >
              <div className={styles.wrapper}>
                <div className={styles.summary}>
                  <p>
                    The Earth Foundation will take this enthused youth and​ inspire, 
                    educate, mentor, and empower it to effect real change and hopefully, 
                    in turn, embolden the following generation.
                  </p>
                </div>
                <div className={styles.image}>
                  <img src="/images/about_inspire_generation.png" />
                </div>
              </div>
            </div>
          </section>


          <BlueSwitcher
            title="The Earth Foundation Board"
            titleColor="#16172C"
            data={foundation.board} />

          <Switcher
            title="The Earth Foundation Team"
            titleColor="#CFAA7A"
            data={foundation.team} />

        </Layout>

      </motion.div>
    )
  }
}


export default AboutUs;
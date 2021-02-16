import React, { PureComponent } from "react";
import Head from "next/head";

import Section from "../components/Section";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import Team from "../components/Team";

import styles from "../styles/about.module.scss";

class AboutUs extends PureComponent {

  render = () => {

    return (
      <>
        <Head>
          <title>The Earth Foundation | About Us | Landing</title>
        </Head>

        <Section
          cover="/images/jeremy-bishop-dR_q93lfaTw-unsplash.jpg"
          title="The Earth Foundation Background"
          paragraphs={[
            "The passion and concern that young people have about environmental sustainability became very",
            "evident during the series of global school strikes which spread across the world in 2019, inspired",
            "by the actions of environmental activist Greta Thunberg."
          ]} />

        <div className={styles.section}>
          <div className={styles.title}>
            <p>The Earth</p>
            <p>Foundation Board</p>
          </div>
          <Team />
        </div>
        

        <Subscribe />
        <Footer />
      </>
    )
  }
}


export default AboutUs;
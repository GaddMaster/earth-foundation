
import Head from "next/head";
import { GetStaticProps } from "next";

import Layout, { siteTitle } from "../components/layout";
import Board from "../components/Board";

import { getSortedPostsData } from "../lib/posts";

import { motion, AnimatePresence } from "framer-motion";
import KeenSlider from "keen-slider/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

import styles from "../styles/layout.module.scss";
import "keen-slider/keen-slider.min.css";

import content from "../assets/home";

export default function Home({ allPostsData }) {
  return (
    <motion.div
      initial = {{ opacity: 0 }}
      animate = {{ opacity: 1 }}
      exit = {{ opacity: 0 }}>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className = {styles.contain}>
          <div className = {styles.earth}>
            <div className = {styles.wrapper}>
              <h1 style = {{margin:"0px 0px 40px 0px"}}>The Earth Foundation</h1>
              <h2>Inspire. Educate. Mentor. Empower.</h2>
              <div className = {styles.summary}>
                <p style = {{margin:"40px 0px 40px 0px"}}>The Earth Foundation aims to distribute $1 million annually to students, researchers​, and youngentrepreneurs​ with innovative ideas to tackle environmental challenges. </p>
                <p>By encouraging andsupporting these projects, The Earth Foundation strives to foster a self-perpetuating ecosystemthat accelerates positive change​ towards ​environmental sustainability.</p>
              </div>
            </div>
          </div>
        </section>
        {content.home.map(item => (
          <Board
            image = {item.image}
            index = {item.index}
            label = {item.label}
            summary = {item.summary}
            background = {item.background}
            key = {item.index} />
        ))}
        <section className = {styles.latest}>
          <div className = {styles.control}>
            <div><FontAwesomeIcon icon = {faArrowLeft} /></div>
            <div><FontAwesomeIcon icon = {faArrowRight} /></div>
            <div>
              <span>Latest News</span>
            </div>
            <div>
              <span>Read All News</span>
              <div><FontAwesomeIcon icon = {faArrowRight} /></div>
            </div>
          </div>
          <div className = {styles.docker}>
            <div className = {styles.wall}></div>
            <div className = {styles.car}>
              <KeenSlider>
                <div className = "keen-slider__slide">1</div>
                <div className = "keen-slider__slide">2</div>
                <div className = "keen-slider__slide">3</div>
              </KeenSlider>
            </div>
          </div>
        </section>
      </Layout>
    </motion.div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
};


import React, { PureComponent } from "react";

import Head from "next/head";

import Layout from "../components/Layout";
import Latest from "../components/Latest";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle as solid, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faCircle as hollow } from "@fortawesome/free-regular-svg-icons";

import { motion } from "framer-motion";

import styles from "../styles/home.module.scss";

import content from "../assets/content";

const Home = () => {
    return (
        <motion.div
            initial = {{ opacity: 0 }}
            animate = {{ opacity: 1 }}
            exit = {{ opacity: 0 }}>
            <Layout title = "The Earth Foundation | Home | Landing">
                <div className = {styles.home}>
                    <div className = {styles.distribute}>
                        <div className = {styles.title}>
                            <h1>The Earth Foundation</h1>
                        </div>
                        <div className = {styles.sub}>
                            <h2>Inspire. Educate. Mentor. Empower</h2>
                        </div>
                        <div className = {styles.para} style = {{marginBottom:20}}>
                            <span>The Earth Foundation aims to distribute $1 million annually to students, researchers, and young entrepreneurs with innovative ideas to tackle environmental challenges.</span>
                        </div>
                        <div className = {styles.para}>
                            <span>By encouraging and supporting these projects, The Earth Foundation strives to foster a self-perpetuating ecosystem that accelerates positive change towards environmental sustainability</span>
                        </div>
                    </div>
                    {content.home.map((item, index) => (
                        <div className = {styles.board} key = {index}>
                            <div className = {styles.banner} style = {{background:`url(${item.image})`}}></div>
                            <div className = {styles.block} style = {{background:item.background||"white"}}>
                                <div className = {styles.padding}>
                                    <div className = {styles.pagination}>
                                        <div className = {styles.index}>
                                            <span>0{index+1}</span>
                                        </div>
                                        <div className = {styles.count}>
                                            <span>04</span>
                                        </div>
                                        <div className = {styles.dots}>
                                            <FontAwesomeIcon icon = {index===0?solid:hollow} className = {styles.dot} />
                                            <FontAwesomeIcon icon = {index===1?solid:hollow} className = {styles.dot} />
                                            <FontAwesomeIcon icon = {index===2?solid:hollow} className = {styles.dot} />
                                            <FontAwesomeIcon icon = {index===3?solid:hollow} className = {styles.dot} />
                                        </div>
                                    </div>
                                    <div className = {styles.label}>
                                        <h1>{item.label}</h1>
                                    </div>
                                    <div className = {styles.summary}>
                                        <p>{item.summary}</p>
                                    </div>
                                    <div className = {styles.route}>
                                        <span>Read More.</span>
                                        <FontAwesomeIcon icon = {faArrowRight} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <Latest />
                </div>
            </Layout>
        </motion.div>
    );
};

export default Home;


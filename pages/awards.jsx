
import Head from "next/head";
import Layout from "../components/Layout";
import Switcher from "../components/Switcher";

import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

import adjudication from "../assets/adjudication.js";
import styles from "../styles/awards.module.scss";

const Awards = props => {
    return (
        <motion.div
            initial = {{ opacity: 0 }}
            animate = {{ opacity: 1 }}
            exit = {{ opacity: 0 }}>
            <Layout title = "The Earth Foundation Awards">
                <div className = {styles.awards}>
                    <div className = {styles.top}>
                        <div className = {styles.header}>
                            <div className = {styles.label}>
                                <h1>The Earth Foundation Awards</h1>
                            </div>
                            <div className = {styles.line}></div>
                        </div>
                        <div className = {styles.summary}>
                            <span>The Earth Foundation Awards will support research endeavours in the environmental sustainability field with grants and scholarships, by distributing $300,000 every year to university students and researchers</span>
                        </div>
                    </div>
                    <div className = {styles.process}>
                        <div className = {styles.image}>
                            <img src = "/images/examination.jpg" alt = "man holding a leaf with a book and magnifying glass" />
                        </div>
                        <div className = {styles.points}>
                            <div className = {styles.point}>
                                <div className = {styles.block}>
                                    <div className = {styles.circle}>
                                        <div className = {styles.marker}>
                                            <span>1.Launch</span>
                                        </div>
                                    </div>
                                    <div className = {styles.guide}>
                                        <div className = {styles.line}></div>
                                    </div>
                                </div>
                                <div className = {styles.text}>
                                    <span>The Earth Foundation announces the theme of the year</span>
                                </div>
                            </div>
                            <div className = {styles.point}>
                                <div className = {styles.block}>
                                    <div className = {styles.circle}>
                                        <div className = {styles.marker}>
                                            <span>2.Evaluation</span>
                                        </div>
                                    </div>
                                    <div className = {styles.guide}>
                                        <div className = {styles.line}></div>
                                    </div>
                                </div>
                                <div className = {styles.text}>
                                    <span>Each research proposal is accessed by the Adjudication Panel biannually</span>
                                </div>
                            </div>
                            <div className = {styles.point}>
                                <div className = {styles.block}>
                                    <div className = {styles.circle}>
                                        <div className = {styles.marker}>
                                            <span>3.Awards</span>
                                        </div>
                                    </div>
                                    <div className = {styles.guide}>
                                        <div className = {styles.line}></div>
                                    </div>
                                </div>
                                <div className = {styles.text}>
                                    <span>The Earth Foundation Awards grantees receive a share of the €300,000 towards research projects</span>
                                </div>
                            </div>
                            <div className = {styles.point}>
                                <div className = {styles.block}>
                                    <div className = {styles.circle}>
                                        <div className = {styles.marker}>
                                            <span>4.Alumni Association</span>
                                        </div>
                                    </div>
                                    <div className = {styles.guide}>
                                        <div className = {styles.line}></div>
                                    </div>
                                </div>
                                <div className = {styles.text}>
                                    <span>All recipients of the Aeards are automatically enrolled in The Earth Foundation Alumni Association</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = {styles.theme}>
                        <span>This year's theme</span>
                    </div>
                    <div className = {styles.carbon}>
                        <div className = {styles.details}>
                            <div className = {styles.header}>
                                <FontAwesomeIcon icon = {faQuoteLeft} />
                                <div className = {styles.text}>
                                    <span>Carbon</span>
                                    <span>Offseting</span>
                                </div>
                            </div>
                            <div className = {styles.apply}>
                                <span>Apply To The Earth Foundation Awards</span>
                                <FontAwesomeIcon icon = {faLongArrowAltRight} />
                            </div>
                            <div className = {styles.eligible}>
                                <span>All university students and research worldwide are eligible to apply to The Earth Foundation Awards</span>
                            </div>
                            <div className = {styles.wall}></div>
                        </div>
                        <div className = {styles.chimney}>
                            <div className = {styles.image}>
                                
                            </div>
                        </div>
                    </div>
                    <div className = {styles.become}>
                        <div className = {styles.header}>
                            <span>Become part of the network</span>
                        </div>
                        <div className = {styles.text}>
                            <span>All recipients of The Earth Foundation Awards will be automatically enrolled in The Earth Foundation Alumni Association. This is a community of inspiring individuals and organizations offering mentorship, networking, internships, professional placement opportunities.</span>
                        </div>
                    </div>
                    <Switcher title="Adjudication Panel" data={adjudication} />
                </div>
            </Layout>
        </motion.div>
    );
};

export default Awards;

export const getStaticProps = async () => {
  return {
    props: {
      
    }
  };
};
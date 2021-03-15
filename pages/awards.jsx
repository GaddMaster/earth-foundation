

import Layout from "../components/Layout";
import PersonViewer from "../components/PersonViewerCarousel";

import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/awards.module.scss";

import content from "assets/content";
import SlideSection from 'components/SlideSection';
import SlideSocials from 'components/SlideSocials';
import Subscribe from 'components/Subscribe';
import {useState} from 'react';
import {useMediaQuery} from 'react-responsive';
import Link from 'next/link';

const Awards = props => {
    const isMobile = useMediaQuery({
        query: `(max-width: 600px)`,
    });
    const [isPoint1Opened, openPoint1] = useState(!isMobile);
    const [isPoint2Opened, openPoint2] = useState(!isMobile);
    const [isPoint3Opened, openPoint3] = useState(!isMobile);
    const [isPoint4Opened, openPoint4] = useState(!isMobile);

    return (
        <motion.div
            initial = {{ opacity: 0 }}
            animate = {{ opacity: 1 }}
            exit = {{ opacity: 0 }}>
            <Layout 
                title = "The Earth Foundation Awards"
                header
                footer>
                <SlideSection height={35} name="The Earth Foundation Awards" color="#CEAA7A" />
                <SlideSocials color="#CEAA7A" style={{ top: '220px' }} />
                <div className = {styles.container}>
                    <div className = {styles.top}>
                        <div className = {styles.header}>
                            <div className = {styles.label}>
                                <h1>The Earth Foundation Awards</h1>
                            </div>
                            <div className = {styles.line} />
                        </div>
                        <div className = {styles.summary}>
                            <span>The Earth Foundation Awards will support research endeavours in the environmental sustainability field with grants and scholarships, by distributing $300,000 every year to university students and researchers.</span>
                        </div>
                    </div>
                    <div className = {styles.process}>
                        <div className = {styles.image}>
                            <img src = "/images/examination.jpg" alt = "man holding a leaf with a book and magnifying glass" />
                        </div>
                        <div className = {styles.points}>
                            <div className = {styles.point}>
                                <div className = {styles.block} onClick={() => isMobile && openPoint1(!isPoint1Opened)}>
                                    <div className = {styles.circle}>
                                        {isMobile && <span>{isPoint1Opened ? '-' : '+'}</span>}
                                        <div className = {styles.marker}>
                                            <span>1.Launch</span>
                                        </div>
                                    </div>
                                    <div className = {styles.guide}>
                                        <div className = {styles.line} />
                                    </div>
                                </div>
                                {isPoint1Opened && (
                                    <div className = {styles.text}>
                                        <span>The Earth Foundation announces the theme of the year.</span>
                                    </div>
                                )}
                            </div>
                            <div className = {styles.point}>
                                <div className = {styles.block} onClick={() => isMobile && openPoint2(!isPoint2Opened)}>
                                    <div className = {styles.circle}>
                                        {isMobile && <span>{isPoint2Opened ? '-' : '+'}</span>}
                                        <div className = {styles.marker}>
                                            <span>2.Evaluation</span>
                                        </div>
                                    </div>
                                    <div className = {styles.guide}>
                                        <div className = {styles.line}></div>
                                    </div>
                                </div>
                                {isPoint2Opened && (
                                    <div className = {styles.text}>
                                        <span>Each research proposal is assessed by the Adjudication Panel biannually.</span>
                                    </div>
                                )}
                            </div>
                            <div className = {styles.point}>
                                <div className = {styles.block} onClick={() => isMobile && openPoint3(!isPoint3Opened)}>
                                    <div className = {styles.circle}>
                                        {isMobile && <span>{isPoint3Opened ? '-' : '+'}</span>}
                                        <div className = {styles.marker}>
                                            <span>3.Awards</span>
                                        </div>
                                    </div>
                                    <div className = {styles.guide}>
                                        <div className = {styles.line} />
                                    </div>
                                </div>
                                {isPoint3Opened && (
                                    <div className = {styles.text}>
                                        <span>The Earth Foundation Awards grantees receive a share of the €300,000 towards research projects.</span>
                                    </div>
                                )}
                            </div>
                            <div className = {styles.point}>
                                <div className = {styles.block} onClick={() => isMobile && openPoint4(!isPoint4Opened)}>
                                    <div className = {styles.circle}>
                                        {isMobile && <span>{isPoint4Opened ? '-' : '+'}</span>}
                                        <div className = {styles.marker}>
                                            <span>4.Alumni Association</span>
                                        </div>
                                    </div>
                                    <div className = {styles.guide}>
                                    </div>
                                </div>
                                {isPoint4Opened && (
                                    <div className = {styles.text}>
                                        <span>All recipients of the Aeards are automatically enrolled in The Earth Foundation Alumni Association.</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className = {styles.theme}>
                        <span>This year's theme</span>
                        <div className = {styles.line} />
                    </div>
                    <div className = {styles.carbon}>
                        <div className = {styles.details}>
                            <div className = {styles.header}>
                                <div className = {styles.text}>
                                    <FontAwesomeIcon icon = {faQuoteLeft} />
                                    <span>Carbon<br /></span>
                                    <span>Offsetting</span>
                                    <FontAwesomeIcon icon = {faQuoteRight} />
                                </div>
                            </div>
                            <Link href="thank-you">
                                <div className = {styles.apply}>
                                    <span>Apply To The Earth Foundation Awards</span>
                                    <FontAwesomeIcon icon = {faArrowRight} />
                                </div>
                            </Link>
                            <div className = {styles.eligible}>
                                <span>All university students and research worldwide are eligible to apply to The Earth Foundation Awards.</span>
                            </div>
                            <div className = {styles.wall} />
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
                            <span>By joining The Earth Foundation Alumni Association, you will be part of an inspiring network that connects mentors, partners and participants. The Alumni Association will strengthen ties among its members, offering them support through access to educational content, mentorship, social events, and professional opportunities.</span>
                        </div>
                    </div>
                    <PersonViewer 
                        title = "The Adjudicating Panel"
                        items = {content.about.team}
                        theme = {{
                            title : "#CFAB79",
                            header : "#FDFEFE",
                            position: "#FDFEFE",
                            paragraph: "#FDFEFE",
                            background: "#064D3F"
                        }} />
                </div>
                <Subscribe
                  background = {{
                      outer: "whitesmoke",
                      inner: "white"
                  }} />
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
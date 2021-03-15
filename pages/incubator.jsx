import React, {useState} from 'react';
import {motion} from "framer-motion";
import Layout from "components/Layout";
import styles from "../styles/incubator.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import SlideSection from 'components/SlideSection';
import SlideSocials from 'components/SlideSocials';
import { useMediaQuery } from 'react-responsive';
import Subscribe from 'components/Subscribe';

const Incubator = () => {
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
                title = "The Earth Foundation Incubator"
                header
                footer
            >
                <SlideSection height={30} name="The Earth Foundation Incubator" color="#CEAA7A" />
                <SlideSocials color="#CEAA7A" style={{ top: '220px' }} />
                <div className = {styles.container}>
                    <div className = {styles.top}>
                        <div className = {styles.header}>
                            <div className = {styles.label}>
                                <h1>The Earth Foundation Incubator</h1>
                            </div>
                            <div className = {styles.line}></div>
                        </div>
                        <div className = {styles.summary}>
                            <span>
                                The Earth Foundation Incubator aim to seed-fund promising start-ups
                                whose work or idea has the potential to accelerate positive change towards environmental sustainability. Every year, a total of $500,000
                                will be distributed to projects proposing innovative and disruptive solutions. All participation start-ups will become part of the The Earth Foundation's
                                special ecosystem and supported along their development path.
                            </span>
                        </div>
                    </div>
                    <div className = {styles.process}>
                        <div className = {styles.image} />
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
                                        <div className = {styles.line}></div>
                                    </div>
                                </div>
                                {isPoint1Opened && (
                                  <div className = {styles.text}>
                                      <span>The Earth Foundation Incubator will launch in May 2022.</span>
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
                                        <span>Each project is assessed by The Earth Foundation Adjudicating Panel.</span>
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
                                        <div className = {styles.line}></div>
                                    </div>
                                </div>
                                {isPoint3Opened && (
                                    <div className = {styles.text}>
                                        <span>The seed-funded projects will receive a substantial share of capital to help them grow.</span>
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
                                        <span>All recipients of The Earth Foundation Incubator will be automatically enrolled in the The Earth Foundation Alumni Association. </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className = {styles.theme}>
                        <span>Are you ready?</span>
                    </div>
                    <div className = {styles.carbon}>
                        <div className = {styles.details}>
                            <div className = {styles.apply}>
                                {/*<span>Apply To The Earth Foundation Incubator <FontAwesomeIcon icon = {faArrowRight} /></span>*/}
                                <span>Launching in 2022</span>
                            </div>
                            <div className = {styles.eligible}>
                                <span>The Earth Foundation Incubator is open to all start-ups interested in sustainability and innovation.</span>
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
                            <span>By joining The Earth Foundation Alumni Association, you will be part of an inspiring network that connects mentors, partners and participants. The Alumni Association will strengthen ties among its members, offering them support through access to educational content, mentorship, social events, and professional opportunities.</span>
                        </div>
                    </div>
                    <Subscribe
                      background = {{
                          outer: "whitesmoke",
                          inner: "white"
                      }} />
                </div>
            </Layout>
        </motion.div>
    );
};

export default Incubator;

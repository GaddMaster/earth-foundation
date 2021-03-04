import React, {useState} from 'react';
import {motion} from "framer-motion";
import Layout from "components/Layout";
import styles from "../styles/incubator.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLongArrowAltRight, faQuoteLeft} from "@fortawesome/free-solid-svg-icons";
import InputBase from "@material-ui/core/InputBase";
import ButtonBase from "@material-ui/core/ButtonBase";
import http from "utils/http";

const Incubator = () => {
    let [email, onEmail] = useState("");
    const onChange = () => e => onEmail(e.target.value);
    const onSubscribe = () => {
        http.request("PUT", "/api/subscribe", { email });
        onEmail("");
        alert("Subscribed");
    };
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
                <div className = {styles.container}>
                    <div className = {styles.top}>
                        <div className = {styles.header}>
                            <div className = {styles.label}>
                                <h1>The Earth Foundation Incubator Initiative</h1>
                            </div>
                            <div className = {styles.line}></div>
                        </div>
                        <div className = {styles.summary}>
                            <span>
                                The Earth Foundation Incubator Initiative aim to seed-fund promising start-ups
                                whose work or idea has the potential to accelerate positive change towards environmental sustainability. Every year, a total of $500,000
                                will be distributed to projects proposing innovative and disruptive solutions. All participation start-ups will become part of the The Earth Foundation's
                                special ecosystem and supported along their development path.
                            </span>
                        </div>
                    </div>
                    <div className = {styles.process}>
                        <div className = {styles.image}>
                            <img src = "/images/incubator/birds.jpeg" alt = "bird flying and playing" />
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
                                    <span>The Earth Foundation Incubator Initiative will launch in May 2022.</span>
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
                                    <span>Each project is assessed by The Earth Foundation Adjudicating Panel.</span>
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
                                    <span>The seed-funded projects will receive a substantial share of capital to help them grow.</span>
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
                                    <span>All recipients of The Earth Foundation Incubator Initiative will be automatically enrolled in the The Earth Foundation Alumni Association. </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = {styles.theme}>
                        <span>Are you ready?</span>
                    </div>
                    <div className = {styles.carbon}>
                        <div className = {styles.details}>
                            <div className = {styles.apply}>
                                <span>Apply To The Earth Foundation Incubator Initiative</span>
                                <FontAwesomeIcon icon = {faLongArrowAltRight} />
                            </div>
                            <div className = {styles.eligible}>
                                <span>The Earth Foundation Incubator Initiative is open to all start-ups interested in sustainability and innovation</span>
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
                            <span>All recipients of The Earth Foundation Incubator will be automatically enrolled in The Earth Foundation Alumni Association.
                                This is a community of inspiring individuals and organizations offering mentorship, networking, internships, professional placement opportunities.</span>
                        </div>
                    </div>
                    <div className={styles.newsLetter}>
                        <div className = {styles.block}>
                            <div className = {styles.label}>
                                <span>Passionate about our initiatives?</span>
                            </div>
                            <div className={styles.newsLetterForm}>
                                <InputBase
                                    placeholder = "Your Email Here"
                                    className = {styles.input}
                                    value = {email}
                                    onChange = {onChange()} />
                                <ButtonBase
                                    className = {styles.button}
                                    onClick = {onSubscribe}>
                                    <span>Join Us</span>
                                </ButtonBase>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </motion.div>
    );
};

export default Incubator;


import React, { PureComponent } from "react";

import Carousel from "react-multi-carousel";
import Card from "./Card";

import { motion } from "framer-motion";
import Button from "@material-ui/core/ButtonBase";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle as solid, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faCircle as hollow } from "@fortawesome/free-regular-svg-icons";

import styles from "../styles/latest.module.scss";
import "react-multi-carousel/lib/styles.css";

import content from "../assets/content";
import responsive from "../assets/responsive";

class Latest extends PureComponent {

    componentDidMount = () => {
        console.log("Mounted");
        window.addEventListener("scroll", this.onScroll);
    };

    onScroll = event => {};

    onPrev = () => this.myCarousel.previous();

    onNext = () => this.myCarousel.next();

    render = () => {
        return (
            <section className = {styles.latest}>
                <div className = {styles.control}>
                    <div className = {styles.centered}>
                        <div className = {styles.spacer}>
                            <motion.button
                                whileHover = {{ scale: 1.1 }}
                                whileTap = {{ scale: 0.8 }}
                                onClick = {this.onNext}>
                                <div className = {styles.icon}>
                                    <FontAwesomeIcon icon = {faArrowRight} />
                                </div>
                            </motion.button>
                        </div>
                        <div className = {styles.spacer}>
                            <motion.button
                                whileHover = {{ scale: 1.1 }}
                                whileTap = {{ scale: 0.8 }}
                                onClick = {this.onPrev}>
                                <div className = {styles.icon}>
                                    <FontAwesomeIcon icon = {faArrowLeft} />
                                </div>
                            </motion.button>
                        </div>
                        <div className = {styles.label}>
                            <span>Latest News</span>
                        </div>
                        <div className = {styles.all}>
                            <motion.button
                                whileHover = {{ scale: 1.1 }}
                                whileTap = {{ scale: 0.8 }}>
                                <div>
                                    <span style = {{marginRight:10}}>Read All News</span>
                                    <FontAwesomeIcon icon = {faArrowRight} />
                                </div>
                            </motion.button>
                        </div>
                    </div>
                    <div className = {styles.wall}></div>
                </div>
                <div className = {styles.carousel}>
                    <Carousel
                        ref = {el => this.myCarousel = el}
                        additionalTransfrom = {0}
                        swipeable
                        dragable
                        ssr
                        arrows = {false}
                        minimumTouchDrag = {0}
                        responsive = {responsive}>
                        {content.home.concat(content.home).map((item, index) => (
                            <div
                                className = {styles.wrapper}
                                key = {index}>
                                <Card
                                    image = {item.image}
                                    label = {item.label} />
                            </div>
                        ))}
                    </Carousel>
                </div>
            </section>
        );
    };

};

export default Latest;
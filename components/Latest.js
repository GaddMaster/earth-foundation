
import React, { PureComponent } from "react";

// import Carousel from "react-multi-carousel";
// import Flickity from "react-flickity-component";
// import Card from "./Card";

import { motion } from "framer-motion";
// import Button from "@material-ui/core/ButtonBase";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/latest.module.scss";
// import "react-multi-carousel/lib/styles.css";

// import content from "../assets/content";
// import responsive from "../assets/responsive";

const options = {
    initialIndex: 2
};

class Latest extends PureComponent {

    // onScroll = event => {};

    // onPrev = () => this.myCarousel.previous();

    // onNext = () => this.myCarousel.next();

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
                            <div>
                                <span style = {{marginRight:10}}>Read All</span>
                                <FontAwesomeIcon icon = {faArrowRight} />
                            </div>
                        </div>
                    </div>
                    <div className = {styles.wall}></div>
                </div>
                <div className = {styles.carousel}>
                {/*<Flickity
                    className = {"carousel"}
                    elementType = {"div"}
                    options = {flickityOptions}
                    disableImagesLoaded = {false}
                    reloadOnUpdate 
                    static>
                    {content.home.concat(content.home).map((item, index) => (
                        <div
                            className = {styles.wrapper}
                            key = {index}>
                            <Card
                                image = {item.image}
                                label = {item.label} />
                        </div>
                    ))}
                    </Flickity>*/}
                </div>
            </section>
        );
    };

};

export default Latest;
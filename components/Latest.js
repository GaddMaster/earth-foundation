
import React, { PureComponent } from "react";

import Card from "./Card";

import { motion } from "framer-motion";
import Button from "@material-ui/core/ButtonBase";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Carousel from "react-multi-carousel";

import styles from "../styles/latest.module.scss";
import "react-multi-carousel/lib/styles.css";

import content from "../assets/content";
import responsive from "../assets/responsive";

const options = {
    initialIndex: 2
};

class Latest extends PureComponent {

    constructor (props) {
        super(props);
        this.state = {
            width: 360
        };
    };

    componentDidMount = () => this.setState({ width: window.screen.width });

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
                            <span style = {{marginRight:10}}>Read All</span>
                            <FontAwesomeIcon icon = {faArrowRight} />
                        </div>
                    </div>
                    <div className = {styles.wall}></div>
                </div>
                <div 
                    className = {styles.carousel}
                    style = {{
                        width: this.state.width - 40
                    }}>
                    <Carousel
                        containerClass = {styles.c}
                        sliderClass = {styles.s}
                        ref = {el => this.myCarousel = el}
                        arrows = {false}
                        responsive = {responsive}>
                        {content.home.concat(content.home).map((item, index) => (
                            <div
                                className = {styles.wrapper}
                                key = {index}>
                                <Card
                                    image = {item.image}
                                    label = {item.label}
                                    summary = {item.summary} />
                            </div>
                        ))}
                    </Carousel>
                </div>
            </section>
        );
    };

};

export default Latest;
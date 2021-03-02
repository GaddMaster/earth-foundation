
import React, { PureComponent } from "react";

import Card from "./Card";

import ButtonBase from "@material-ui/core/ButtonBase";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Carousel from "react-multi-carousel";

import styles from "../styles/latest.module.scss";
import "react-multi-carousel/lib/styles.css";

import content from "../assets/content";
import responsive from "../assets/responsive";

class Latest extends PureComponent {

    constructor (props) {
        super(props);
        this.state = {
            width: 360
        };
    };

    componentDidMount = () => this.setState({ width: window.innerWidth });

    onScroll = event => {};

    onPrev = () => this.myCarousel.previous();

    onNext = () => this.myCarousel.next();

    render = () => {
        let { width } = this.state;
        let mobile = this.state.width < 600;
        let style = {
            control: mobile ? 240 : (width * 0.3),
            carousel: mobile ? (width - 40) : (width * 0.7)
        };
        return (
            <section className = {styles.latest}>
                <div className = {styles.control} style = {{width:style.control}}>
                    <div className = {styles.centered}>
                        <div className = {styles.spacer}>
                            <ButtonBase 
                                className = {styles.button}
                                onClick = {this.onNext}>
                                <FontAwesomeIcon icon = {faArrowRight} />
                            </ButtonBase>
                        </div>
                        <div className = {styles.spacer}>
                            <ButtonBase 
                                className = {styles.button}
                                onClick = {this.onPrev}>
                                <FontAwesomeIcon icon = {faArrowLeft} />
                            </ButtonBase>
                        </div>
                        <div className = {styles.label}>
                            <span>Latest News</span>
                        </div>
                        <div className = {styles.all}>
                            <span style = {{marginRight:10}}>Read All</span>
                            <span className = {styles.news}>News</span>
                            <FontAwesomeIcon icon = {faArrowRight} />
                        </div>
                    </div>
                    <div className = {styles.wall}></div>
                </div>
                <div className = {styles.carousel} style = {{width:style.carousel}}>
                    <Carousel
                        containerClass = {mobile ? styles.container : null}
                        sliderClass = {styles.slider}
                        ref = {el => this.myCarousel = el}
                        arrows = {false}
                        ssr
                        responsive = {responsive}>
                        {content.home.blocks.concat(content.home.blocks).map((item, index) => (
                            <div className = {styles.wrapper} key = {index}>
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
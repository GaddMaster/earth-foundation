
import React, { PureComponent } from "react";

import Card from "./Card";

import ButtonBase from "@material-ui/core/ButtonBase";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Carousel from "react-multi-carousel";
import Link from "next/link";

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
        let width = this.state.width < 900 ? this.state.width : 900;
        let mobile = this.state.width < 600;
        let style = {
            control: mobile ? 200 : (width * 0.3),
            carousel: mobile ? (width - 40) : (width * 0.7)
        };
        return (
            <section className = {styles.container}>
                <section className = {styles.inner}>
                    <div className = {styles.control} style = {{width:style.control,height:styles.control}}>
                        <div className = {styles.centered}>
                            {/*<div className = {styles.spacer}>
                                <ButtonBase 
                                    className = {styles.button}
                                    onClick = {this.onNext}
                                    ontouchend = {this.onNext}>
                                    <FontAwesomeIcon icon = {faArrowRight} />
                                </ButtonBase>
                            </div>
                            <div className = {styles.spacer}>
                                <ButtonBase 
                                    className = {styles.button}
                                    onClick = {this.onPrev}
                                    ontouchend = {this.onPrev}
                                    >
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
                            </div>*/}
                            <div className={styles.webinar}>
                                <p className={styles.announcementMobile}>The Earth Foundation<br /> will officially launch<br /> The Earth Prize on April 19th, 2021.</p>
                                <p className={styles.announcementDesktop}>The Earth Foundation will officially launch The Earth Prize on April 19th, 2021.</p>
                                <div className={styles.logo} />
                                <Link href="webinar">
                                    <button>Learn more about The Earth Prize Launch Webinar</button>
                                </Link>
                            </div>
                        </div>
                        <div className = {`${styles.wall} ${styles.wallA}`} />
                        <div className = {`${styles.wall} ${styles.wallB}`} />
                    </div>
                    {/*<div className = {styles.carousel} style = {{width:style.carousel}}>
                        <Carousel
                            containerClass = {mobile ? styles.carcon : styles.carmo}
                            sliderClass = {styles.slider}
                            ref = {el => this.myCarousel = el}
                            arrows = {false}
                            ssr
                            responsive = {responsive}>
                            {content.home.news.map((item, index) => (
                                <div className = {styles.wrapper} key = {index}>
                                    <Card
                                        image = {item.image}
                                        label = {item.label}
                                        summary = {item.summary} />
                                </div>
                            ))}
                        </Carousel>
                    </div>*/}
                </section>
            </section>
        );
    };
};

export default Latest;
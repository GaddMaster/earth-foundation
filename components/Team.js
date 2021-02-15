
import React, { PureComponent } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle as solid, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faCircle as hollow } from "@fortawesome/free-regular-svg-icons";

import content from "../assets/content";

import styles from "../styles/team.module.scss";

const pointInRect = ({ x1, y1, x2, y2 }, { x, y }) => (x > x1 && x < x2) && (y > y1 && y < y2);
const heights = [254, 274, 396, 340];

class Team extends PureComponent {

    constructor(props) {
        super(props);
        this.state = { index: 0 };
    };

    onPage = index => this.setState({ index });

    render = () => {
        let item = content.about[this.state.index];
        return (
            <div className={styles.board}>
                <div className={styles.dots}>
                    {[0, 1].map(number => (
                        <div
                            id={`dotID_${number}`}
                            onClick={this.onPage.bind(this, number)}
                            key={number}>
                            <img
                                className={styles.thumbnail}
                                src={content.about[number].image}
                                alt={content.about[number].name} />
                        </div>
                    ))}
                </div>
                <div className={styles.block} style={{ background: item.background || "white" }}>
                    <div className={styles.padding}>
                        {content.about.map((i, index) => {
                            let current = index === this.state.index;
                            return (
                                <motion.div
                                    style={{
                                        marginBottom: current ? 20 : 0,
                                    }}
                                    animate={{
                                        x: current ? 0 : -100,
                                        opacity: current ? 1 : 0,
                                        height: current ? heights[index] : 0
                                    }}
                                    transition={{ ease: "easeOut", duration: 0.25 }}
                                    key={index}>
                                    <div className={styles.name}>
                                        <h1>{i.name}</h1>
                                    </div>
                                    <div className={styles.role}>
                                        <h2>{i.role}</h2>
                                    </div>
                                    <div className={styles.info}>
                                        <p>{i.info}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                    <div 
                        className={styles.image} 
                        style={{ background: `url(${item.image})` }}>
                    </div>
                </div>
            </div>
        );
    };

};

export default Team;
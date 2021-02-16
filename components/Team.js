
import React, { PureComponent } from "react";

import { motion } from "framer-motion";

import content from "../assets/content";

import styles from "../styles/team.module.scss";

const heights = [254, 274, 396];

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
                    {[0, 1, 2].map(number => (
                        <div
                            id={`dotID_${number}`}
                            onClick={this.onPage.bind(this, number)}
                            key={number}>
                            <img
                                className={styles.thumbnail}
                                src={content.about[number].image}
                                alt={content.about[number].name} />
                            <p>{content.about[number].name}</p>
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
                                    animate = {{
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
                                    <hr/>
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
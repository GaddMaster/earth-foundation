
import React, { PureComponent } from "react";

import Board from "./Board";

import content from "../assets/content";

import styles from "../styles/boards.module.scss";

class Boards extends PureComponent {

    constructor (props) {
        super(props);
        this.state = {
            count: 4
        };
    };

    componentDidMount = () => {};
    
    render = () => {
        return (
            <div 
                className = {styles.boards}
                style = {{
                    transition: this.props.percentage > 0 ? "top 0.0s" : "top 0.5s",
                    top: this.props.percentage > 0 ? `${100-this.props.percentage}vh` : this.props.current === 0 ? `100vh` : "0vh"
                }}>
                {content.home.map((item, index) => (
                    <Board
                        image = {item.image}
                        index = {index}
                        label = {item.label}
                        summary = {item.summary}
                        path = {item.path}
                        background = {item.background}
                        key = {index} />
                ))}
            </div>
        );
    };

};

export default Boards;
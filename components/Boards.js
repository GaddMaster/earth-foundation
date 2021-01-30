
import React, { PureComponent } from "react";

import Board from "./Board";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle as solid, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faCircle as hollow } from "@fortawesome/free-regular-svg-icons";

import content from "../assets/content";

import styles from "../styles/boards.module.scss";

const pointInRect = ({x1, y1, x2, y2}, {x, y}) => (x > x1 && x < x2) && (y > y1 && y < y2);


class Boards extends PureComponent {

    constructor (props) {
        super(props);
        this.lock = false;
        this.state = {
            index: 0,
            max: content.home.length - 1
        };
    };

    componentDidUpdate = (pp, ps) => {
        if (this.props.current === 1) {
            if (!pp.touch && this.props.touch && !this.lock) {
                this.lock = true;
                for (let x = 0; x < content.home.length; x++) {
                    let element = document.getElementById(`dotID_${x}`);
                    var rect = element.getBoundingClientRect();
                    if (pointInRect({ x1: rect.x, y1: rect.y, x2: rect.x+rect.width, y2: rect.y+rect.height}, { x: this.props.posX, y: this.props.posY })) {
                        this.setState({ index: x });
                    }
                    setTimeout(() => this.lock = false, 500);
                }
            }
            if (pp.current === 0 && this.props.current === 1) {
                this.props.onLock("push", true);
                this.props.onLock("pull", false);
            }
            if (pp.current === 1 && this.props.current === 0) {
                this.props.onLock("push", false);
                this.props.onLock("pull", true);
            }
            if (pp.current === 1 && this.props.current === 2) {
                this.props.onLock("push", true);
                this.props.onLock("pull", false);
            }
            if (pp.current === 2 && this.props.current === 1) {
                this.props.onLock("push", false);
                this.props.onLock("pull", true);
            }
            if (ps.index === 0 && this.state.index === 1) {
                this.props.onLock("push", false);
                this.props.onLock("pull", false);
            }
            if (ps.index === 1 && this.state.index === 0) {
                this.props.onLock("push", true);
                this.props.onLock("pull", false);
            }
            if (ps.index < this.state.max && this.state.index === this.state.max) {
                this.props.onLock("push", false);
                this.props.onLock("pull", true);
            }
            if (this.props.gesture && pp.gesture !== this.props.gesture) {
                console.log("GESTURE ", this.props.gesture);
                if (this.props.gesture === "push") this.setState({ index: this.state.index > 0 ? this.state.index - 1 : 0 });
                if (this.props.gesture === "pull") this.setState({ index: this.state.index < this.state.max ? this.state.index + 1 : this.state.max });
            }
        }
    };

    onPage = index => {
        console.log(index);
        this.setState({ index });
    };
    
    render = () => {
        let item = content.home[this.state.index];
        return (
            <div className = {styles.boards}>
                <div className = {styles.banner} style = {{background:`url(${item.image})`}}></div>
                <div className = {styles.block} style = {{background:item.background||"black"}}>
                    <div className = {styles.padding}>
                        <div className = {styles.pagination}>
                            <div className = {styles.index}>
                                <span>0{this.state.index + 1}</span>
                            </div>
                            <div className = {styles.count}>
                                <span>0{content.home.length}</span>
                            </div>
                            <div className = {styles.dots}>
                                {[0,1,2,3].map(number => (
                                    <div
                                        id = {`dotID_${number}`}
                                        onClick = {() => {console.log("PAGE");}} 
                                        key = {number}>
                                        <FontAwesomeIcon 
                                            icon = {number === this.state.index ? solid : hollow} 
                                            className = {styles.dot} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className = {styles.label}>
                            <h1>{item.label}</h1>
                        </div>
                        <div className = {styles.summary}>
                            <p>{item.summary}</p>
                        </div>
                        <div className = {styles.route}>
                            <span>Read More</span>
                            <FontAwesomeIcon icon = {faArrowRight} />
                        </div>
                    </div>
                </div>
            </div>
        );
    };

};

export default Boards;

import React, { PureComponent } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFingerprint } from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/touch.module.scss";

class TouchControl extends PureComponent {

    constructor (props) {
        super(props);
        this.date = new Date();
        this.state = {
            touch: false,
            width: 0,
            height: 0,
            percent: 0,
            start: {
                x: 0,
                y: 0
            },
            end: {
                x: 0,
                y: 0
            },
            diff: {
                x: 0,
                y: 0
            },
            direction: "",
            gesture: "",
            start_milli: 0,
            end_milli: 0,
            threshold: 50,
            speed: 500,
            percentage: 0,
            previous: {
                x: 0,
                y: 0
            }
        };
    };

    componentDidMount = () => {
        window.addEventListener("touchstart", this.onTouchStart); // MOBILE TOUCH START
        window.addEventListener("touchend", this.onTouchEnd); // MOBILE TOUCH END
        window.addEventListener("touchmove", this.onDragging); // DRAGGING UPDATES
        window.addEventListener("wheel", this.onWheel); // WHEEL UPDATES
        window.addEventListener("mousedown", this.onMouseDown); // MOBILE TOUCH START
        window.addEventListener("mouseup", this.onMouseUp); // MOBILE TOUCH END
        window.addEventListener("mousemove", this.onMouseMove); // DRAGGING UPDATES
        this.setState({
            height: window.screen.height,
            percent: window.screen.height / 100
        });
    };

    onTouchStart = e => {
        this.props.onTouch(true);
        this.setState({
            touch: true,
            direction: "still",
            start: {
                x: (e.touches[0]||{}).clientX,
                y: (e.touches[0]||{}).clientY
            },
            start_milli: new Date().getTime()
        });
    };

    onTouchEnd = e => {
        let x = (e.changedTouches[0]||{}).clientX;
        let y = (e.changedTouches[0]||{}).clientY;
        let diffX = this.state.start.x - (e.changedTouches[0]||{}).clientX;
        let diffY = this.state.start.y - (e.changedTouches[0]||{}).clientY;
        let end_milli = new Date().getTime();
        let diff_milli = end_milli - this.state.start_milli;
        let convert = diffY < 0 ? (diffY*-1) : diffY;
        let gesturing = diff_milli < this.state.speed && convert > this.state.threshold;
        let gesture = gesturing ? (this.state.start.y < y ? "up" : "down") : "";
        if (gesture) this.props.onGesture(`${end_milli}${gesture}`);
        this.props.onTouch(false);
        this.setState({
            touch: false,
            end: { 
                x, 
                y 
            },
            diff: {
                x: diffX,
                y: diffY
            },
            direction: "still",
            gesture,
            end_milli
        });
    };

    onDragging = e => {
        let posX = (e.changedTouches[0]||{}).clientX;
        let posY = (e.changedTouches[0]||{}).clientY;
        let diffY = this.state.start.y - posY;
        let percentage = parseInt((diffY / this.state.percent).toFixed(2));
        let direction = posY < this.state.previous.y ? "up" : posY === this.state.previous.y ? this.state.direction : "down";
        this.props.onDragging(direction, percentage);
        this.setState({
            direction,
            previous: {
                x: posX,
                y: posY
            },
            percentage
        });
    };

    onWheel = e => {
        var delta = null, direction = false;
        if (!e) e = window.event;
        if (e.wheelDelta) delta = e.wheelDelta / 60;
        else if ( e.detail ) delta = -e.detail / 2;
        if ( delta !== null ) direction = delta > 0 ? 'up' : 'down';
        this.props.onCurrent(direction);
    };

    onMouseDown = e => {
        this.props.onTouch(true);
        this.setState({
            touch: true,
            direction: "still",
            start: {
                x: e.clientX,
                y: e.clientY
            },
            start_milli: new Date().getTime()
        });
    };

    onMouseUp = e => {
        let x = e.clientX;
        let y = e.clientY;
        let diffX = this.state.start.x - x;
        let diffY = this.state.start.y - y;
        let end_milli = new Date().getTime();
        let diff_milli = end_milli - this.state.start_milli;
        let convert = diffY < 0 ? (diffY*-1) : diffY;
        let gesturing = diff_milli < this.state.speed && convert > this.state.threshold;
        let gesture = gesturing ? (this.state.start.y < y ? "up" : "down") : "";
        if (gesture) this.props.onGesture(`${end_milli}${gesture}`);
        this.props.onTouch(false);
        this.setState({
            touch: false,
            end: { 
                x, 
                y 
            },
            diff: {
                x: diffX,
                y: diffY
            },
            direction: "still",
            gesture,
            end_milli
        });
    };

    onMouseMove = e => {
        if (this.state.touch) {
            let posX = e.clientX;
            let posY = e.clientY;
            let diffY = this.state.start.y - posY;
            let percentage = parseInt((diffY / this.state.percent).toFixed(2));
            let direction = posY < this.state.previous.y ? "up" : posY === this.state.previous.y ? this.state.direction : "down";
            this.props.onDragging(direction, percentage);
            this.setState({
                direction,
                previous: {
                    x: posX,
                    y: posY
                },
                percentage
            });
        }
    };
    
    render = () => {
        return (
            <div className = {styles.touch}>

                {this.state.touch && 
                    <div style = {{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}>
                        <span>{this.state.direction.toUpperCase()}</span>
                        <span>{this.state.percentage}</span>
                        <span><FontAwesomeIcon icon = {faFingerprint} /></span>
                    </div> }
            </div>
        );
    };

};

export default TouchControl;

import { PureComponent } from "react";
import PropTypes from "prop-types";

import misc from "utils/misc";

class ScrollListener extends PureComponent {

    constructor (props) {
        super(props);
        this.lock = false;
        this.state = {
            touch: false,
            height: 0,
            percent: 0,
            startX: 0,
            startY: 0,
            endX: 0,
            endY: 0,
            diffX: 0,
            diffY: 0,
            prevX: 0,
            prevY: 0,
            sm: 0,
            em: 0,
            threshold: 50,
            speed: 500,
            direction: "",
            percentage: 0
        };
    };

    componentDidMount = () => {
        window.addEventListener("touchstart", this.onTouchStart);
        window.addEventListener("touchend", this.onTouchEnd);
        window.addEventListener("touchmove", this.onDragging);
        window.addEventListener("mousedown", this.onTouchStart);
        window.addEventListener("mouseup", this.onTouchEnd);
        window.addEventListener("mousemove", this.onDragging);
        window.addEventListener("wheel", this.onWheel);
        this.setState({
            height: window.innerWidth,
            percent: window.innerHeight / 100
        });
    };

    onTouchStart = e => {
        let startX = e.clientX >= 0 ? e.clientX : (e.touches[0]||{}).clientX;
        let startY = e.clientY >= 0 ? e.clientY : (e.touches[0]||{}).clientY;
        this.props.onTouch(true, startX, startY);
        this.setState({
            touch: true,
            direction: "",
            startX,
            startY,
            sm: new Date().getTime()
        });
    };

    onTouchEnd = e => {
        let endX = e.clientX >= 0 ? e.clientX : (e.touches[0]||{}).clientX;
        let endY = e.clientY >= 0 ? e.clientY : (e.touches[0]||{}).clientY;
        this.props.onTouch(false);
        this.setState({
            touch: false,
            endX,
            endY,
            diffX: this.state.startX - endX,
            diffY: this.state.startX - endY,
            em: new Date().getTime()
        });
    };

    onDragging = e => {
        if (!e.clientY || (e.clientY >= 0 && this.state.touch)) {
            let posX = e.clientX >= 0 ? e.clientX : (e.touches[0]||{}).clientX;
            let posY = e.clientY >= 0 ? e.clientY : (e.touches[0]||{}).clientY;
            let diffY = this.state.startY - posY;
            let percentage = parseInt((diffY / this.state.percent).toFixed(2));
            let direction = posY < this.state.prevY ? "up" : posY === this.state.prevY ? this.state.direction : "down";
            this.props.onDragging(direction, percentage);
            this.setState({
                prevX: posX,
                prevY: posY,
                direction,
                percentage
            });
        }
    };

    onWheel = e => {
        console.log(window.scrollY);
        if (this.lock) return;
        this.lock = true;
        var delta = null, direction = false;
        if (!e) e = window.event;
        if (e.wheelDelta) delta = e.wheelDelta / 60;
        else if ( e.detail ) delta = -e.detail / 2;
        if ( delta !== null ) direction = delta > 0 ? 'up' : 'down';
        this.props.onCurrent(direction);
        setTimeout(() => this.lock = false, 500);
    };
    
    render = () => {
        return (
            <div></div>
        );
    };

};

ScrollListener.propTypes = {
    onTouch: PropTypes.func,
    onCurrent: PropTypes.func,
    onDragging: PropTypes.func
};

ScrollListener.defaultProps = {
    onTouch: misc.noop,
    onCurrent: misc.noop,
    onDragging: misc.noop
};

export default ScrollListener;
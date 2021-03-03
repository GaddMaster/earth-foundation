
import React, { PureComponent } from "react";

import CircleSlide from "./CircleSlide";

import { AnimatePresence, motion } from "framer-motion";
import { InView } from "react-intersection-observer";

import styles from "../styles/pause.scroller.module.scss";

import content from "assets/content";

var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

class PauseScroller extends PureComponent {
    
    constructor (props) {
        super(props);
        this.ref = React.createRef()
        this.state = {
            index: 0,
            lock: false,
            set: false,
            inView: false
        };
    };

    componentDidMount = () => {
        var supportsPassive = false;
        try {
            window.addEventListener("test", null, Object.defineProperty({}, "passive", {
              get: function () { supportsPassive = true; } 
            }));
        } catch(e) {}
        this.wheelOpt = supportsPassive ? { passive: false } : false;
        this.wheelEvent = "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";
        window.addEventListener("touchstart", this.onTouchStart);
        if (window.innerWidth > 900) window.addEventListener("mousedown", this.onTouchStart);
    };

    onTouchStart = e => {
        // console.log("Touch Start");
        if (this.state.lock) {
            // console.log("T");
            let index = this.state.index < 2 ? this.state.index + 1 : this.state.index;
            let lock = index < 2;
            this.setState({
                index,
                lock 
            });
            if (!lock) {
                this.onEnableScroll();
                this.setState({
                    set: true
                });
            }
        }
    };

    onPreventDefault = e => e.preventDefault();

    onPreventDefaultForScrollKeys = e => {
        if (keys[e.keyCode]) {
          this.onPreventDefault(e);
          return false;
        }
    };

    onDisableScroll = () => {
        window.addEventListener("DOMMouseScroll", this.onPreventDefault, false);
        window.addEventListener(this.wheelEvent, this.onPreventDefault, this.wheelOpt);
        window.addEventListener("touchmove", this.onPreventDefault, this.wheelOpt);
        window.addEventListener("keydown", this.onPreventDefaultForScrollKeys, false);
    };

    onEnableScroll() {
        window.removeEventListener("DOMMouseScroll", this.onPreventDefault, false);
        window.removeEventListener(this.wheelEvent, this.onPreventDefault, this.wheelOpt); 
        window.removeEventListener("touchmove", this.onPreventDefault, this.wheelOpt);
        window.removeEventListener("keydown", this.onPreventDefaultForScrollKeys, false);
    }

    onChange = inView => {
        // console.log("Changed : ", inView);
        this.setState({ inView });
        if (inView) {
            if (!this.state.set) {
                this.setState({ lock: true });
                this.onDisableScroll();
            }
        }
    };

    render = () => {
        // console.log("");
        // console.log("Index : ", this.state.index);
        // console.log("Lock : ", this.state.lock);
        // console.log("Set : ", this.state.set);
        // console.log("In View : ", this.state.inView);
        return (
            <section className = {styles.container}>
                <InView 
                    as = "div" 
                    threshold = {0.9}
                    onChange = {this.onChange}>
                    <AnimatePresence exitBeforeEnter>
                        {this.state.index === 0 &&
                            <motion.div
                                key = "slide0"
                                style = {{ width: "100%", height: "100%" }}
                                initial = {{ x: 300, opacity: 0 }}
                                animate = {{ x: 0, opacity: 1 }}
                                exit = {{ x: -300, opacity: 0 }}>
                                <CircleSlide
                                    paragraph = {content.about.slides[0].paragraph}
                                    image = {content.about.slides[0].image} />
                            </motion.div> }
                        {this.state.index === 1 &&
                            <motion.div
                                key = "slide1"
                                style = {{ width: "100%", height: "100%" }}
                                initial = {{ x: 300, opacity: 0 }}
                                animate = {{ x: 0, opacity: 1 }}
                                exit = {{ x: -300, opacity: 0 }}>
                                <CircleSlide
                                    paragraph = {content.about.slides[1].paragraph}
                                    image = {content.about.slides[1].image} />
                            </motion.div> }
                        {this.state.index === 2 &&
                            <motion.div
                                key = "slide2"
                                style = {{ width: "100%", height: "100%" }}
                                initial = {{ x: 300, opacity: 0 }}
                                animate = {{ x: 0, opacity: 1 }}
                                exit = {{ x: -300, opacity: 0 }}>
                                <CircleSlide
                                    paragraph = {content.about.slides[2].paragraph}
                                    image = {content.about.slides[2].image} />
                            </motion.div> }
                    </AnimatePresence>
                </InView >
            </section>
        );
    };

};

export default PauseScroller;
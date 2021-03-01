
import React, { PureComponent } from "react";

import ScrollListener from "./ScrollListener";

import { AnimatePresence, motion } from "framer-motion";
import { InView } from "react-intersection-observer";

import styles from "../styles/pause.scroller.module.scss";

var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

class PauseScroller extends PureComponent {
    
    constructor (props) {
        super(props);
        this.ref = React.createRef()
        this.state = {
            index: 0,
            scroll: true
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
        var lastScrollPosition = 0, tick = false;
        window.addEventListener("scroll", function(e) {
            lastScrollPosition = window.scrollY;
            if (!tick) {
              setTimeout(function () {
                tick = false;
              }, 1000)
            }
            tick = true;
          });
    };

    componentDidUpdate = (pp, ps) => {};

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
        if (inView) {
            // this.setState({ scroll: false });
            // this.onDisableScroll()
        }
    };

    render = () => {
        return (
            <section className = {styles.container}>
                <InView 
                    as = "div" 
                    style = {{
                        width: "100%",
                        height: "100%"
                    }}
                    threshold = {1}
                    onChange = {this.onChange}>
                    <AnimatePresence exitBeforeEnter>
                        {this.state.index === 0 &&
                            <motion.div
                                key = "slide1"
                                initial = {{ x: 300, opacity: 0 }}
                                animate = {{ x: 0, opacity: 1 }}
                                exit = {{ x: -300, opacity: 0 }}
                                transition = {{ duration: process.env.ANIMATION_SPEED }}>
                                <div className = {styles.slide}>
                                    
                                </div>
                            </motion.div> }
                    </AnimatePresence>
                </InView >
            </section>
        );
    };

};

export default PauseScroller;
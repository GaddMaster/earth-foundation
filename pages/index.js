
import React, { PureComponent } from "react";

import Head from "next/head";

import Layout from "../components/layout";
import Section from "../components/Section";
import Boards from "../components/Boards";
import Board from "../components/Board";
import Slide from "../components/Slide";
import Latest from "../components/Latest";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import TouchControl from "../components/TouchControl";

import { getSortedPostsData } from "../lib/posts";

import { motion, AnimatePresence } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

import styles from "../styles/home.module.scss";

import content from "../assets/content";

class Home extends PureComponent {

    constructor (props) {
        super(props);
        this.state = {
            touch: false,
            current: 0,
            gesture: "",
            percentage: 0,
            direction: "",
            threshold: 20
        };
    };

    componentDidUpdate = (pp, ps) => {
        // if (this.state.gesture !== ps.gesture) {
        //     console.log("New Gesture : ", this.state.gesture);
        // }
    };

    onTouch = touch => {
        let current = this.state.current;
        if (this.state.percentage < 0) {
            if (this.state.percentage < (this.state.threshold * -1)) {
                if (this.state.current === 1) current = 0;
                else if (this.state.current === 2) current = 1;
            }
        } else if (this.state.percentage > 0) {
            if (this.state.percentage > this.state.threshold) {
                if (this.state.current === 0) current = 1;
                else if (this.state.current === 1) current = 2;
            }
        }
        this.setState({
            touch,
            current,
            percentage: 0,
            direction: ""
        });
    };

    onCurrent = direction => {
        let current = this.state.current;
        if (direction === "up") {
            if (this.state.current > 0) current--;
        } else if (direction === "down") {
            if (this.state.current < 2) current++;
        }
        this.setState({ current });
    };

    onDragging = (direction, percentage) => {
        console.log({ direction, percentage });
        this.setState({ 
            direction, 
            percentage
        });
    };

    onGesture = gesture => this.setState({ gesture });
    
    render = () => {
        return (
            <motion.div
                initial = {{ opacity: 0 }}
                animate = {{ opacity: 1 }}
                exit = {{ opacity: 0 }}>
                <Layout home>
                    <Head>
                        <title>The Earth Foundation | Home | Landing</title>
                    </Head>
                    <Slide
                        index = {0}
                        current = {this.state.current}
                        touch = {this.state.touch}
                        percentage = {this.state.percentage}
                        pull = {false}
                        push = {false}
                        background = "yellow">
                        <span>Information A</span>
                    </Slide>
                    <Slide
                        index = {1}
                        current = {this.state.current}
                        touch = {this.state.touch}
                        percentage = {this.state.percentage}
                        pull = {this.state.current === 0}
                        push = {this.state.current === 1}
                        background = "purple">
                        <span>Information B</span>
                    </Slide>
                    <Slide
                        index = {2}
                        current = {this.state.current}
                        touch = {this.state.touch}
                        percentage = {this.state.percentage}
                        pull = {this.state.current === 1}
                        push = {this.state.current === 2}
                        background = "orange">
                        <span>Information C</span>
                    </Slide>
                    <TouchControl 
                        onTouch = {this.onTouch}
                        onDragging = {this.onDragging}
                        onGesture = {this.onGesture}
                        onCurrent = {this.onCurrent} />
                </Layout>
            </motion.div>
        );
    };

};

export default Home;

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
};

{
    /* <Section 
    cover = "/images/nasa-Q1p7bh3SHj8-unsplash.jpg"
    title = "The Earth Foundation"
    subtitle = "Inspire. Educate. Mentor. Empower."
    paragraphs = {[
        "The Earth Foundation aims to distribute $1 million annually to students, researchers​, and youngentrepreneurs​ with innovative ideas to tackle environmental challenges.",
        "By encouraging andsupporting these projects, The Earth Foundation strives to foster a self-perpetuating ecosystemthat accelerates positive change​ towards ​environmental sustainability."
    ]} /> */
}

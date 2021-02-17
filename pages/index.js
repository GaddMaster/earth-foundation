
import React, { PureComponent } from "react";

import Head from "next/head";

import Layout from "../components/Layout";
import Section from "../components/Section";
import Boards from "../components/Boards";
import Slide from "../components/Slide";
import Latest from "../components/Latest";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import TouchControl from "../components/TouchControl";

import { getSortedPostsData } from "../lib/posts";

import { motion } from "framer-motion";

import styles from "../styles/home.module.scss";

class Home extends PureComponent {

    constructor (props) {
        super(props);
        this.state = {
            touch: false,
            posX: 0,
            posY: 0,
            current: 0,
            percentage: 0,
            direction: "",
            threshold: 20,
            push: false,
            pull: true,
            gesture: "",
            lock: false
        };
    };

    componentDidMount = () => {
        var element = document.getElementById("end");
        element.addEventListener("scroll", e => this.setState({ lock: e.target.scrollTop > 0 }));
    };

    onTouch = (touch, posX, posY, gesture) => {
        if (this.state.lock) return;
        let current = this.state.current;
        if (gesture === "push" || this.state.percentage < 0) {
            if (gesture || this.state.percentage < (this.state.threshold * -1)) {
                if (this.state.push) {
                    if (this.state.current === 1) {
                        current = 0;
                        this.setState({
                            push: false,
                            pull: true
                        });
                    }
                    else if (this.state.current === 2) current = 1;
                }
                this.setState({ gesture: "push" });
                setTimeout(() => this.setState({ gesture: "" }), 500);
            }
        } else if (gesture === "pull" || this.state.percentage > 0) {
            if (gesture || this.state.percentage > this.state.threshold) {
                if (this.state.pull) {
                    if (this.state.current === 0) current = 1;
                    else if (this.state.current === 1) {
                        current = 2;
                        this.setState({
                            push: true,
                            pull: false
                        });
                    }
                }
                this.setState({ gesture: "pull" });
                setTimeout(() => this.setState({ gesture: "" }), 500);
            }
        }
        this.setState({
            touch,
            posX,
            posY,
            current,
            percentage: 0,
            direction: ""
        });
    };

    onCurrent = direction => {
        if (this.state.lock) return;
        let current = this.state.current;
        let gesture = this.state.gesture;
        if (direction === "up") {
            gesture = "push";
            if (this.state.push && this.state.current === 1) current--;
            else gesture = "push";
        } else if (direction === "down") {
            gesture = "pull";
            if (this.state.pull && this.state.current === 1) current++;
            else if (this.state.current < 2) current++;
            else gesture = "pull";
        }
        this.onTouch(false, 0, 0, gesture);
    };

    onDragging = (direction, percentage) => {
        this.setState({ 
            direction, 
            percentage
        });
    };

    onLock = (name, value) => this.setState({ [name]: value });
    
    render = () => {

        console.clear();
        console.log("");
        console.log("LOCK : ", this.state.lock);
        console.log(`PUSH : %c${this.state.push}`, `color:${this.state.push?"green":"red"}`);
        console.log(`PULL : %c${this.state.pull}`, `color:${this.state.pull?"green":"red"}`);
        console.log("CURRENT : ", this.state.current);
        console.log("GESTURE : ", this.state.gesture);

        return (
            <motion.div
                initial = {{ opacity: 0 }}
                animate = {{ opacity: 1 }}
                exit = {{ opacity: 0 }}>
                <Layout home>
                    <Head>
                        <title>The Earth Foundation | Home | Landing</title>
                    </Head>
                    <h1>The Earth Foundation</h1>
                    <h2>Coming Soon</h2>
                    <Slide
                        index = {0}
                        current = {this.state.current}
                        touch = {this.state.touch}
                        percentage = {this.state.percentage}
                        pull = {false}
                        push = {false}
                        background = "yellow">
                        <Section 
                            cover = "/images/nasa-Q1p7bh3SHj8-unsplash.webp"
                            title = "The Earth Foundation"
                            subtitle = "Inspire. Educate. Mentor. Empower."
                            paragraphs = {[
                                "The Earth Foundation aims to distribute $1 million annually to students, researchers​, and youngentrepreneurs​ with innovative ideas to tackle environmental challenges.",
                                "By encouraging andsupporting these projects, The Earth Foundation strives to foster a self-perpetuating ecosystemthat accelerates positive change​ towards ​environmental sustainability."
                            ]} />
                        </Slide>
                    <Slide
                        index = {1}
                        current = {this.state.current}
                        touch = {this.state.touch}
                        percentage = {this.state.percentage}
                        pull = {this.state.pull && this.state.current === 0}
                        push = {this.state.push && this.state.current === 1}
                        background = "purple">
                        <Boards
                            current = {this.state.current}
                            touch = {this.state.touch}
                            percentage = {this.state.percentage}
                            posX = {this.state.posX}
                            posY = {this.state.posY}
                            gesture = {this.state.gesture}
                            onLock = {this.onLock} />
                    </Slide>
                    <Slide
                        index = {2}
                        current = {this.state.current}
                        touch = {this.state.touch}
                        percentage = {this.state.percentage}
                        pull = {this.state.pull && this.state.current === 1}
                        push = {this.state.push && this.state.current === 2}>
                        <div className = {styles.last}>
                            <div 
                                id = "end"
                                className = {styles.wrapper}>
                                <Latest onLock = {this.onLock} />
                                <Subscribe />
                                <Footer />
                            </div>
                        </div>
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

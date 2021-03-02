
import Head from "next/head";

import React, { PureComponent, createRef } from "react";

import Layout from "components/Layout";
import Cover from "components/Cover";
import PersonViewer from "components/PersonViewer";
import PersonViewerCarousel from "components/PersonViewerCarousel";
import PauseScroller from "components/PauseScroller";
import Subscribe from "components/Subscribe";
import TouchControl from "components/TouchControl";

import { motion } from "framer-motion";
import ScrollSnap from "scroll-snap";

import content from "assets/content";

class AboutUs extends PureComponent {

    constructor (props) {
        super(props);
        // this.ref = createRef();
    };

    // componentDidMount = () => this.onBind();

    // onCallback = () => {};

    onBind = () => {
        // const element = this.ref.current;
        // const snapElement = new ScrollSnap(element, { snapDestinationY: "100vh" });
        // snapElement.bind(this.onCallback);
    };

    render = () => {

        return (
            <motion.div
                initial = {{ opacity: 0 }}
                animate = {{ opacity: 1 }}
                exit = {{ opacity: 0 }}>

                <Head>
                    <title>About Us | The Earth Foundation Background</title>
                </Head>

                <Layout 
                    title = "The Earth Foundation Background"
                    footer = {{
                        show: true,
                        background: "white"
                    }}
                    header>

                    <Cover cover = {content.about.cover} />

                    <PauseScroller />

                    <PersonViewer 
                        title = "The Earth Foundation Board" 
                        items = {content.about.board}
                        theme = {{
                            title : "#17182D",
                            header : "#D4AC75",
                            position: "#AA9487",
                            paragraph: "#FEFEFE",
                            background: "#17182D"
                        }} />

                    <PersonViewerCarousel 
                        title = "The Earth Foundation Team"
                        items = {content.about.team}
                        theme = {{
                            title : "#CFAB79",
                            header : "#FDFEFE",
                            position: "#FDFEFE",
                            paragraph: "#FDFEFE",
                            background: "#064D3F"
                        }} />

                    <br />

                    <Subscribe 
                        background = {{
                            outer: "white",
                            inner: "whitesmoke"
                        }} />

                </Layout>
            
            </motion.div>
        );

    }
}


export default AboutUs;

{/* 
    <Cover cover = {content.about.cover} />
     <PauseScroller />
    <Switcher 
title = "The Earth Foundation Board" 
data = {foundation.board} 
themeColor = "#16172C" 
titleColor = "#16172C" 
boardTitleColor = "#CFAA7A" />

<Switcher 
title = "The Earth Foundation Team" 
data = {foundation.team} 
titleColor = "#CFAA7A" />

<Subscribe /> */}

import Head from "next/head";

import React, { PureComponent, createRef } from "react";

import Layout from "components/Layout";
import Cover from "components/Cover";
import Switcher from "components/Switcher";
import PauseScroller from "components/PauseScroller";
import Subscribe from "components/Subscribe";

import { motion } from "framer-motion";
import ScrollSnap from "scroll-snap";

import content from "../assets/content";
import foundation from "../assets/foundation";

class AboutUs extends PureComponent {

    constructor (props) {
        super(props);
        this.ref = createRef()
    };

    componentDidMount = () => this.onBind();

    onCallback = () => console.log("On Snap");

    onBind = () => {
        const element = this.ref.current;
        const snapElement = new ScrollSnap(element, {
          snapDestinationY: "90%"
        });
        snapElement.bind(onCallback);
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

                <Layout title = "The Earth Foundation Background">

                    <div id = "container" ref = {this.container}>

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

                        <Subscribe />

                    </div>

                </Layout>
            
            </motion.div>
        );

    }
}


export default AboutUs;
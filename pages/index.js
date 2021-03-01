
import React, { PureComponent } from "react";

import Head from "next/head";

import Layout from "../components/Layout";
import Cover from "components/Cover";
import Block from "components/Block";
import Latest from "../components/Latest";
import Subscribe from "../components/Subscribe";

import { motion } from "framer-motion";

import styles from "../styles/home.module.scss";

import content from "../assets/content";

const Home = () => {
    return (
        <motion.div
            initial = {{ opacity: 0 }}
            animate = {{ opacity: 1 }}
            exit = {{ opacity: 0 }}>
            <Layout title = "The Earth Foundation | Home | Landing">
                <Cover cover = {content.home.cover} />
                {content.home.blocks.map((item, index) =>
                    <Block
                        item = {item}
                        index = {index}
                        key = {index} />
                )}
                <Latest />
                <Subscribe />
            </Layout>
        </motion.div>
    );
};

export default Home;



import Head from "next/head";

import { motion } from "framer-motion";

import styles from "../styles/home.module.scss";

const Home = () => {
    return (
        <motion.div
            initial = {{ opacity: 0 }}
            animate = {{ opacity: 1 }}
            exit = {{ opacity: 0 }}>
            <Head>
                <title>The Earth Foundation | Home | Landing</title>
            </Head>
            <div className = {styles.home}>
                <h1>The Earth Foundation</h1>
                <h2>Coming Soon</h2>
            </div>
        </motion.div>
    );
};

export default Home;


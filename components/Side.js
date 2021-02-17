
import * as React from "react";
import { motion } from "framer-motion";
import MenuItem from "./MenuItem";

import styles from "../styles/side.module.scss";

const variants = {
    open: {
        transition: { 
            staggerChildren: 0.07, 
            delayChildren: 0.2 
        }
    },
    closed: {
        transition: { 
            staggerChildren: 0.05, 
            staggerDirection: -1 
        }
    }
};

const itemsIDs = [0, 1, 2, 3, 4];

const Side = () => (
    <motion.ul 
        className = {styles.side}
        variants = {variants}>
        {itemsIDs.map(i => <MenuItem i = {i} key = {i} />)}
    </motion.ul>
);

export default Side;

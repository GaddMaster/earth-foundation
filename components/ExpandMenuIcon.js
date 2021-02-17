
import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import useDimensions from "../assets/useDimensions";
import MenuToggle from "./MenuToggle";
import Navigation from "./Navigation";

import styles from "../styles/bars.module.scss";

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
        }
    }
};

const ExpandMenuIcon = () => {
    const [open, onToggle] = useCycle(false, true);
    const ref = useRef(null);
    const { height } = useDimensions(ref);
    return (
        <motion.nav
            initial = {false}
            animate = {open ? "open" : "closed"}
            custom = {height}
            ref = {ref}>
                <motion.div 
                    className = "background" 
                    variants = {sidebar} />
                <Navigation />
                <MenuToggle toggle = {() => onToggle()} />
        </motion.nav>
    );
};

export default ExpandMenuIcon;
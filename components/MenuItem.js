
import * as React from "react";
import { motion } from "framer-motion";

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
        y: { 
            stiffness: 1000, 
            velocity: -100 
            }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
        y: { 
            stiffness: 1000 
            }
        }
    }
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

const MenuItem = ({ i }) => {
    const style = { border: `2px solid ${colors[i]}` };
    return (
        <motion.li
            variants = {variants}
            style = {{
                listStyle: "none",
                marginBottom: 20,
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                color: "grey"
            }}
            whileHover = {{ scale: 1.1 }}
            whileTap = {{ scale: 0.95 }}>
            <div 
                className = "icon-placeholder" 
                style = {{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    flex: "40px 0",
                    marginRight: 20,
                    ...style
                }} />
            <div 
                className = "text-placeholder" 
                style = {{
                    borderRadius: 5,
                    width: 200,
                    height: 20,
                    flex: 1,
                    ...style
                }} />
        </motion.li>
    );
};

export default MenuItem;
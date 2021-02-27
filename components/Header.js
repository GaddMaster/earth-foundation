
import Link from "next/link";

import { useState } from "react";

import Side from "./Side";

import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import { withStyles } from "@material-ui/styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/header.module.scss";

const style = {
    drawerPaper: {
        width: '100%',
        background: "#16172C"
    }
};

const Header = props => {
    const [open, onOpen] = useState(false);
    return (
        <div className = {styles.header}>
            <div className = {styles.wrapper}>
                <div className = {styles.logo}>
                    <Link href = "/">
                        <img src = "/images/logo.png" />
                    </Link>
                </div>
                <nav className = {styles.nav}>
                    <div className = {styles.dropdown}>
                        <span>About Us</span>
                    </div>
                    <div className = {styles.dropdown}>
                        <span>Our Initiatives</span>
                    </div>
                    <div className = {styles.dropdown}>
                        <span>News</span>
                    </div>
                    <div className = {styles.dropdown}>
                        <span>Get Involved</span>
                    </div>
                    <IconButton 
                        className = {`${styles.icon}`}
                        onClick = {onOpen.bind(this, !open)}>
                        <FontAwesomeIcon icon = {faBars} />
                    </IconButton>
                </nav>
            </div>
            <div className = {styles.curve}>
                <img src = "/images/divider.png" alt = "" />
            </div>
            <Drawer 
                open = {open}
                anchor = "right" 
                classes = {{ paper: props.classes.drawerPaper }}
                style = {{ zIndex: 1 }}
                onClose = {onOpen.bind(this, false)}>
                <Side />
            </Drawer>
        </div>
    );
};

export default withStyles(style)(Header);

import Link from "next/link";

import { useState } from "react";

import ExpandMenuIcon from "./ExpandMenuIcon";

import ButtonBase from "@material-ui/core/ButtonBase";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/header.module.scss";

const Header = props => {
    const [anchor, setAnchor] = useState(null);
    const [index, setIndex] = useState(null);
    const onAnchor = (index, event) => {
        setAnchor(event.currentTarget);
        setIndex(index);
    };
    const onClose = () => {
        setAnchor(null);
        setIndex(null);
    };
    const [open, setOpen] = useState(false);
    return (
        <header className = {styles.header}>
            <div className = {styles.wrapper}>
                <div className = {styles.logo}>
                    <Link href = "/">
                        <img src = "/images/logo.png" />
                    </Link>
                </div>
                <nav className = {styles.nav}>
                    <div 
                        className = {styles.dropdown} 
                        onClick = {onAnchor.bind(this, 0)} 
                        aria-controls = "simple-menu" >
                        <span>About Us</span>
                        <FontAwesomeIcon icon = {index===0?faAngleDown:faAngleUp} />
                    </div>
                    <div 
                        className = {styles.dropdown} 
                        onClick = {onAnchor.bind(this, 1)} 
                        aria-controls = "simple-menu" >
                        <span>Our Initiatives</span>
                        <FontAwesomeIcon icon = {index===1?faAngleDown:faAngleUp} />
                    </div>
                    <div className = {styles.dropdown}>
                        <span>News</span>
                    </div>
                    <div 
                        className = {styles.dropdown} 
                        onClick = {onAnchor.bind(this, 2)} 
                        aria-controls = "simple-menu" >
                        <span>Get Involved</span>
                        <FontAwesomeIcon icon = {index===2?faAngleDown:faAngleUp} />
                    </div>
                    <div className = {`${styles.icon}`}>
                        <ExpandMenuIcon />
                    </div>
                </nav>
            </div>
            <div className = {styles.curve}>
                <svg xmlns = "http://www.w3.org/2000/svg" viewBox = "0 0 1440 320">
                    <path 
                        fill = "white" 
                        fillOpacity = "1" 
                        style = {{
                            fillRule: "nonzero",
                            stroke: "none"
                        }}
                        d = "M0,256L120,218.7C240,181,480,107,720,80C960,53,1200,75,1320,85.3L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
                </svg>
            </div>
            <Menu
                id = "simple-menu"
                anchorEl = {anchor}
                keepMounted
                open = {Boolean(anchor)}
                getContentAnchorEl = {null}
                anchorOrigin = {{
                    vertical: "bottom",
                    horizontal: "center"
                }}
                transformOrigin = {{
                    vertical: "top",
                    horizontal: "center"
                }}
                onClose = {onClose}>
                <MenuItem onClick = {onClose}>My Menu Item I</MenuItem>
                <MenuItem onClick = {onClose}>My Menu Item I</MenuItem>
                <MenuItem onClick = {onClose}>My Menu Item I</MenuItem>
            </Menu>
        </header>
    );
};

export default Header;

import Link from "next/link";

import { useState } from "react";

import ExpandMenuIcon from "./ExpandMenuIcon";

import { motion } from "framer-motion";
import ButtonBase from "@material-ui/core/ButtonBase";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/header.module.scss";

const Header = props => {
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
                    <div className = {styles.link}>
                        <Link href = "/about-us">
                            <span>About Us</span>
                        </Link>
                    </div>
                    <div className = {styles.link}>
                        <Link href = "/our-initiatives">
                            <span>Our Initiatives</span>
                        </Link>
                    </div>
                    <div className = {styles.link}>
                        <Link href = "/news">
                            <span>News</span>
                        </Link>
                    </div>
                    <div className = {styles.link}>
                        <Link href = "/get-involved">
                            <span>Get Involved</span>
                        </Link>
                    </div>
                    <ButtonBase className = {`${styles.icon}`}>
                        <FontAwesomeIcon  icon = {faBars} />
                    </ButtonBase>
                </nav>
            </div>
        </header>
    );
};

export default Header;
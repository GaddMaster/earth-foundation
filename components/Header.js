
// NEXT JS
import Link from "next/link";

// FAVICON ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/header.module.scss";

const Header = props => {
  return (
    <header className = {styles.header}>
        <nav className = {styles.navigation}>
            <div className = {styles.logo}>
                <img src = "/images/logo.png" />
            </div>
            <div className = {styles.links}>
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
                    <Link href = "/our-initiatives">
                        <span>Our Initiatives</span>
                    </Link>
                </div>
                <div className = {styles.link}>
                    <Link href = "/get-involved">
                        <span>Get Involved</span>
                    </Link>
                </div>
                <div className = {`${styles.icon} ${styles.search}`}>
                    <FontAwesomeIcon icon = {faSearch} />
                </div>
                <div className = {`${styles.icon} ${styles.bars}`}>
                    <FontAwesomeIcon icon = {faBars} />
                </div>
            </div>
        </nav>
    </header>
  );
};

export default Header;
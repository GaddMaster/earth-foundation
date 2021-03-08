import Link from "next/link";

import { useState } from "react";

import Side from "./Side";

import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import { withStyles } from "@material-ui/styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/header.module.scss";
import CustomizedMenus from "./MenuItem";

const style = {
  drawerPaper: {
    width: "100%",
    background: "#16172C",
  },
};

const Header = (props) => {
  const [open, onOpen] = useState(false);
 const InitiativesMenu = {
    name: "Our Initiatives",
    subItems: [
      {
        name: "The Earth Prize",
        route: "about",
      },
      {
        name: "The Earth Foundation Awards",
        route: "about",
      },
      {
        name: "The Earth Foundation Incubator",
        route: "about",
      },
    ],
  };
 const GetInvolvedMenu = {
    name: "Get Involved",
    subItems: [
      {
        name: "The Earth Foundation",
        route: "about",
      },
      {
        name: "Become a mentor (for The Earth Prize)",
        route: "about",
      },
    ],
  };
 const AboutUsMenu = {
    name: "About Us",
    subItems: [
      {
        name: "The Earth Foundation",
        route: "about",
      },
      {
        name: "The Adjudicating Panel",
        route: "about",
      },
      {
        name: "Our Advisors",
        route: "about",
      },
    ],
  };
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Link href="/">
            <img src="/images/logo.png" />
          </Link>
        </div>
        <nav className={styles.nav}>
          <div className={styles.dropdown}>
            {/* <Link href="/about-us">
              <span>About Us</span>
            </Link> */}
            <CustomizedMenus item={AboutUsMenu} />
          </div>
          <div className={styles.dropdown}>
            {/* <span>Our Initiatives</span> */}
            <CustomizedMenus item={InitiativesMenu} />
          </div>
          <div className={styles.dropdown}>
            <span>News</span>
          </div>
          <div className={styles.dropdown}>
            {/* <span>Get Involved</span> */}
            <CustomizedMenus item={GetInvolvedMenu} />
          </div>
          
          <IconButton
            className={`${styles.icon}`}
            onClick={onOpen.bind(this, !open)}
          >
            <FontAwesomeIcon icon={faBars} />
          </IconButton>
        </nav>
      </div>
      <div className={styles.curve}>
        <img src="/images/divider.png" alt="" />
      </div>
      <Drawer
        open={open}
        anchor="right"
        classes={{ paper: props.classes.drawerPaper }}
        style={{ zIndex: 1 }}
        onClose={onOpen.bind(this, false)}
      >
        <Side />
      </Drawer>
    </div>
  );
};

export default withStyles(style)(Header);

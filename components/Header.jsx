import { useState, useEffect } from "react";

import Side from "./Side";

import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import { withStyles } from "@material-ui/styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/header.module.scss";
import CustomizedMenus from "./MenuItem";
import {useRouter} from 'next/router';

const style = {
  drawerPaper: {
    width: "100%",
    background: "#16172C",
  },
};

const Header = (props) => {
  const [open, onOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const body = document.body;
    window.addEventListener('scroll', () => {
      document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
    });

    if (open) {
      const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
      body.style.position = 'fixed';
      body.style.top = `-${scrollY}`;
    } else {
      const scrollY = body.style.top;
      body.style.position = '';
      body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }, [open]);

  const handleLogoClick = route => {
    if (router.pathname === route) {
      onOpen(false);
    } else {
      router.push(route);
    }
  }

 const InitiativesMenu = {
    name: "Our Initiatives",
    subItems: [
      {
        name: "The Earth Prize",
        route: "earth-prize",
      },
      {
        name: "The Earth Prize Mentors",
        route: "mentors",
      },
      {
        name: "The Earth Foundation Awards",
        route: "awards",
      },
      // {
      //   name: "Incubator Partnerships",
      //   route: "incubator",
      // },
      {
        name: "The Earth Foundation Alumni Association",
        route: "alumni",
      },
    ],
  };

 const GetInvolvedMenu = {
    name: "Get Involved",
    subItems: [
      {
        name: "The Earth Prize Webinar for Teachers & Schools",
        route: "webinar-teachers-schools",
      },
      {
        name: "The Earth Prize Launch Webinar",
        route: "webinar",
      },
      {
        name: "Become part of our network",
        route: "sign-up",
      },
      {
        name: "Become an Earth Prize Mentor",
        route: "mentors",
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
        route: "adjudicating-panel",
      },
      {
        name: "Our Advisors",
        route: "advisors",
      },
      {
        name: "The Earth Prize Schools",
        route: "schools",
      },
    ],
  };
  return (
    <div className={styles.header} style={{ position: open ? 'fixed' : 'absolute' }}>
      <div className={styles.wrapper}>
        <div className={styles.logo} onClick={() => handleLogoClick("/")}>
            <img src="/images/logotype.png" />
        </div>
        <nav className={styles.nav}>
          <div className={styles.dropdown}>
            {/* <Link href="/about">
              <span>About Us</span>
            </Link> */}
            <CustomizedMenus item={AboutUsMenu} />
          </div>
          <div className={styles.dropdown}>
            {/* <span>Our Initiatives</span> */}
            <CustomizedMenus item={InitiativesMenu} />
          </div>
          {/*<div className={styles.dropdown}>
            <span>News</span>
          </div>*/}
          <div className={styles.dropdown}>
            {/* <span>Get Involved</span> */}
            <CustomizedMenus item={GetInvolvedMenu} />
          </div>

          <IconButton
            className={`${styles.icon}`}
            onClick={() => onOpen(!open)}
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
        onClose={() => onOpen(false)}
      >
        <Side onOpen={onOpen} />
      </Drawer>
    </div>
  );
};

export default withStyles(style)(Header);

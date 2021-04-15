import Head from "next/head";
import React, {
  Fragment,
  FunctionComponent,
  MouseEvent,
  useEffect,
  useState,
} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Cookies from "./Cookies";
import { checkCookie, setCookie } from 'utils';

import styles from "../styles/layout.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import ButtonBase from "@material-ui/core/ButtonBase";
import HomeNav from "../containers/HomeNav";

export const COOKIES_AGREEMENT = 'earthfoundationcookies';
export const COOKIES_LIFETIME_IN_DAYS = 90;

const Layout = ({children, home}) => {
    const [hideMenu, setMenu] = useState(false)
  const [canTrack, setTracking] = useState(false);

  const checkTracking = () => {
    setTracking(checkCookie(COOKIES_AGREEMENT));
  };

  const handleAcceptClick = event => {
    try {
      event.preventDefault();
      setCookie(COOKIES_AGREEMENT, 'true', COOKIES_LIFETIME_IN_DAYS);
      event.currentTarget.parentElement?.parentElement?.classList.add(styles.__hidden);
      checkCookie(COOKIES_AGREEMENT);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  const handleDeclineClick = event => {
    setTracking(false)
    setCookie(COOKIES_AGREEMENT, 'false', COOKIES_LIFETIME_IN_DAYS);
    event.currentTarget.parentElement?.parentElement?.classList.add(styles.__hidden);
  };

  useEffect(
    () => {
      checkTracking();
    },
    [],
  );

    return (
        <div className={styles.layout}>
            <Head>
                <meta name="viewport" content="width = device-width, initial-scale = 1.0"/>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="description" content="The Earth Foundation empowers youth to accelerate positive change towards environmental sustainability"/>
            </Head>
            <Header/>
            {
                hideMenu &&  <HomeNav
                    setMenu={setMenu}
                />
            }
            {children}
          {!canTrack && <Cookies handleAcceptClick={handleAcceptClick} handleDeclineClick={handleDeclineClick} />}
          <Footer/>
        </div>
    );
};

export default Layout;

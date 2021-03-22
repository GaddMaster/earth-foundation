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

export const COOKIES_AGREEMENT = 'earthfoundationcookies';
export const COOKIES_LIFETIME_IN_DAYS = 90;

const Layout = props => {
    let show = Boolean(props.footer);
    let params = show && props.footer.background ? props.footer : {};
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
        <div className = {styles.layout} style = {{background:props.background}}>
            <Head>
                <meta name = "viewport" content = "width = device-width, initial-scale = 1.0" />
                <link rel = "icon" href = "/favicon.ico" />
                <meta name = "description" content = "The Earth Foundation Was Founded To Help The Planet Recover" />
                <link href = "https://fonts.googleapis.com/css2?family=Lato:wght@400&display=swap" rel = "stylesheet" />
            </Head>
            {props.header && <Header />}
            {props.children}
            {!canTrack && <Cookies handleAcceptClick={handleAcceptClick} handleDeclineClick={handleDeclineClick} />}
            {show && <Footer {...params} />}
        </div>
    );
};

export default Layout;

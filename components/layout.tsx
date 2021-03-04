import Head from "next/head";

import Header from "./Header";
import Footer from "./Footer";

import styles from "../styles/layout.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import ButtonBase from "@material-ui/core/ButtonBase";
import {useState} from "react";
import HomeNav from "../containers/HomeNav";

const Layout = ({children, home}) => {
    const [hideMenu, setMenu] = useState(false)
    return (
        <div className={styles.layout}>
            <Head>
                <meta name="viewport" content="width = device-width, initial-scale = 1.0"/>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="description" content="The Earth Foundation Was Founded To Help The Planet Recover"/>
            </Head>
            <Header/>
            <div style={{
                position: "absolute",
                top: "0",
                right: "0",
                zIndex: 999
            }}>
                <ButtonBase
                    onClick={() => setMenu(true)}
                    style={{
                        width: "50px",
                        height: "50px",
                        margin: "15px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "grey",
                        borderRadius: "50%",
                    }}>
                    <FontAwesomeIcon icon={faBars}/>
                </ButtonBase>
            </div>
            {
                hideMenu &&  <HomeNav
                    setMenu={setMenu}
                />
            }
            {children}
            <Footer/>
        </div>
    );
};

export default Layout;

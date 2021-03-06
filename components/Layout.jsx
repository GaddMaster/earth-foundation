import Head from "next/head";

import Header from "./Header";
import Footer from "./Footer";

import styles from "../styles/layout.module.scss";

const Layout = props => {
    let show = Boolean(props.footer);
    let params = props.footer.background ? props.footer : {}; 
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
            {show && <Footer {...params} />}
        </div>
    );
};

export default Layout;

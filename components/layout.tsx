
// NEXT JS
import Head from "next/head";

// CUSTOM COMPONENT
import Header from "../components/Header";

import styles from "../styles/layout.module.scss";

const Layout = ({ children, home }: { children: React.ReactNode, home ? : boolean }) => {
  return (
    <div className = {styles.layout}>

      <Head>
        <meta name = "viewport" content = "width = device-width, initial-scale = 1.0" />
        <link rel = "icon" href = "/favicon.ico" />
        <meta name = "description" content = "The Earth Foundation Was Founded To Help The Planet Recover" />
      </Head>

      {/*<Header />*/}

      {children}

    </div>
  );
};

export default Layout;

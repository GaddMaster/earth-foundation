
import Link from "next/link";

import Layout from "components/Layout";

import ButtonBase from "@material-ui/core/ButtonBase";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import styles from "styles/welcome.module.scss";

const Welcome = () => {
  return (
    <Layout 
        title = "Welcome to our community"
        header>
        <div className = {styles.container}>
            <div className = {styles.title}>
                <h1> Welcome to our community</h1>
            </div>
            <div className={styles.divider}></div>
            <div className = {styles.sub}>
                <span>We are exited to have you on board. <br /> How would you like to get involved?</span>
            </div>
            <ButtonBase 
                className = {styles.button}
                onClick = {()=>{}}>
                <span>take a short survey</span>
            </ButtonBase>
            <Link href = "/">
                <div className={styles.back}>
                    <span>back to home page</span>
                    <FontAwesomeIcon icon = {faArrowRight} />
                </div>
            </Link>
        </div>
    </Layout>
  );
};

export default Welcome;

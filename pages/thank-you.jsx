import Layout from "components/Layout";
import styles from "styles/thank-you.module.scss";
import ButtonBase from "@material-ui/core/ButtonBase";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import SlideSection from 'components/SlideSection';
import SlideSocials from 'components/SlideSocials';

const ThankYou = () => {
    return (
        <Layout
            title = "Welcome to our community"
            header
        >
            <div className={styles.container}>
                <SlideSection height={35} name="the Earth Foundation Awards" color="#FFFFFF" />
                <SlideSocials color="#FFFFFF" />
                <div className = {styles.title}>
                    <h1>Thank you!</h1>
                </div>
                <div className={styles.divider}></div>
                <div className = {styles.sub}>
                    <span>Thank you for your interest in The Earth Foundation Awards.</span>
                </div>
                <div className={styles.description}>
                    <span> The application will open in June 2021. Sign up below to receive a reminder so you do not miss the deadline.</span>
                </div>
                <div className={styles.buttonArea}>
                    <ButtonBase
                        className = {styles.buttonEmail}
                        onClick = {()=>{}}>
                        <span>your email here</span>
                    </ButtonBase>
                    <ButtonBase
                        className = {styles.buttonSubmit}
                        onClick = {()=>{}}>
                        <span>Submit</span>
                    </ButtonBase>
                </div>
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

export default ThankYou;

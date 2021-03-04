
import Link from "next/link";

import Layout from "components/Layout";

import InputBase from "@material-ui/core/InputBase";
import ButtonBase from "@material-ui/core/ButtonBase";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import styles from "styles/become.part.module.scss";

const BecomePart = () => {
    return (
        <Layout 
            title = "Welcome to our community" 
            header>
            <div className = {styles.container}>
                <div className = {styles.title}>
                    <div>Become part</div>
                    <div>of out network</div>
                </div>
                <div className = {styles.divider}></div>
                <div className = {styles.sub}>
                    <span>The Earth Foundation is always looking for people passionate about environmental sustainability who are seeking to connect with others</span>
                </div>
                <div className = {styles.sub}>
                    <span>Join us to get the latest updates on what our community of inspiring individuals is up to, share your ideas, or simply chat with us</span>
                </div>
                <div className = {styles.form}>
                    <InputBase
                        className = {styles.input}
                        name = "email"
                        type = "text"
                        placeholder = "Your Email Here" />
                    <ButtonBase 
                        className = {styles.button} 
                        onClick = {() => {}}>
                        <span>join us</span>
                    </ButtonBase>
                </div>
                <Link href = "/">
                    <div className = {styles.home}>
                        <span>Back To The Homepage</span>
                        <FontAwesomeIcon icon = {faArrowRight} />
                    </div>
                </Link>
            </div>
        </Layout>
    );
};

export default BecomePart;

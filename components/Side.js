
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

import styles from "../styles/side.module.scss";

const Side = () => (
    <div className = {styles.side}>

        <div className = {styles.title}>
            <span>About Us</span>
        </div>
        <div className = {styles.item}>
            <span>The Earth Foundation</span>
        </div>
        <div className = {styles.item}>
            <span>The Adjudicating Panel</span>
        </div>
        <div className = {styles.item}>
            <span>Our Ambassadors</span>
        </div>

        <br />

        <div className = {styles.title}>
            <span>Our Initiatives</span>
        </div>
        <div className = {styles.item}>
            <span>The Earth Prize</span>
        </div>
        <div className = {styles.item}>
            <span>The Earth Foundation Awards</span>
        </div>
        <div className = {styles.item}>
            <span>The Earth Foundation Incubator Iniatives</span>
        </div>
        <div className = {styles.item}>
            <span>The Earth Foundation Alumni</span>
        </div>

        <br />

        <div className = {styles.title}>
            <span>News</span>
        </div>

        <div className = {styles.title}>
            <span>Get Involved</span>
        </div>
        <div className = {styles.item}>
            <span>Become a mentor</span>
        </div>
        <div className = {styles.item}>
            <span>Become part of our network</span>
        </div>

        <br />

        <div className = {styles.socials}>
            <div className = {styles.social}>
                <FontAwesomeIcon icon = {faFacebookF} />
            </div>
            <div className = {styles.social}>
                <FontAwesomeIcon icon = {faTwitter} />
            </div>
            <div className = {styles.social}>
                <FontAwesomeIcon icon = {faInstagram} />
            </div>
            <div className = {styles.social}>
                <FontAwesomeIcon icon = {faYoutube} />
            </div>
        </div>

    </div>
);

export default Side;

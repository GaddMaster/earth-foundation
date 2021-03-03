
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

import styles from "../styles/footer.module.scss";

const Footer = props => {
    return (
        <section className = {styles.footer} style = {{background:props.background||"whitesmoke"}}>
            <div className = {styles.block}>
                <div className = {styles.logo}>
                    <img className = {styles.logo} src = "/images/logo.png" />
                </div>
                <div className = {styles.information}>
                    <div className = {styles.links}>
                        <div className = {styles.routes}>
                            <div className = {styles.route}>
                                <span>About</span>
                            </div>
                            <div className = {styles.route}>
                                <span>Contact Us</span>
                            </div>
                            <div className = {styles.route}>
                                <span>Data Protection Policy</span>
                            </div>
                            <div className = {styles.route}>
                                <span>Terms & Conditions</span>
                            </div>
                        </div>
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
                    <div className = {styles.rights}>
                        <span>2021 The Earth Foundation. All Rights Reserved</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
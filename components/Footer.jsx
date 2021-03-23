import Link from "next/link";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

import styles from "../styles/footer.module.scss";

const Footer = props => {
    console.log(props);
    return (
        <section className = {styles.container} style = {{background:props.background.outer}}>
            <div className = {styles.inner} style = {{background:props.background.inner}}>
                <div className = {styles.padding}>
                    <div className = {styles.logo}>
                        <img className = {styles.logo} src = "/images/logo.png" />
                    </div>
                    <div className = {styles.information}>
                        <div className = {styles.links}>
                            <div className = {styles.routes}>
                                <div className = {styles.route}>
                                    <span>Contact Us</span>
                                </div>
                                <div className = {styles.route}>
                                    <span>Data Protection Policy</span>
                                </div>
                                <div className = {styles.route}>
                                    <Link href="/terms-and-conditions">
                                        <span>Terms & Conditions</span>
                                    </Link>
                                </div>
                                <div className = {styles.route}>
                                    <Link href="/copyright-policy">
                                        <span>Copyright Policy</span>
                                    </Link>
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
            </div>
        </section>
    );
};

Footer.propTypes = {
    background: PropTypes.object
};

Footer.defaultProps = {
    background: {
        outer: "whitesmoke",
        inner: "whitesmoke"
    }
};

export default Footer;
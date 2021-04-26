import Link from "next/link";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import styles from "../styles/footer.module.scss";

const Footer = props => {
    return (
        <section className = {styles.container} style = {{background:props.background.outer}}>
            <div className = {styles.inner} style = {{background:props.background.inner}}>
                <div className = {styles.padding}>
                    <div className = {styles.logo}>
                        <Link href="/">
                            <img className = {styles.logo} src = "/images/logo.png" />
                        </Link>
                    </div>
                    <div className = {styles.information}>
                        <div className = {styles.links}>
                            <div className = {styles.routes}>
                                <div className = {`${styles.route}`}>
                                    <Link href="/contact-us">
                                        <span>Contact Us</span>
                                    </Link>
                                </div>
                                <div className = {styles.route}>
                                    <Link href="/privacy-policy">
                                        <span>Privacy Policy</span>
                                    </Link>
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
                                <a href="https://www.facebook.com/the.earth.fdn" target="_blank" className = {styles.social}>
                                    <FontAwesomeIcon icon = {faFacebookF} />
                                </a>
                                <a href="https://twitter.com/earth_fdn" target="_blank" className = {styles.social}>
                                    <FontAwesomeIcon icon = {faTwitter} />
                                </a>
                                <a href="https://www.instagram.com/the.earthfoundation" target="_blank" className = {styles.social}>
                                    <FontAwesomeIcon icon = {faInstagram} />
                                </a>
                                <a href="https://www.linkedin.com/company/the-earth-foundation" target="_blank" className = {styles.social}>
                                    <FontAwesomeIcon icon = {faLinkedinIn} />
                                </a>
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
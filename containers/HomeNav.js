import styles from "../styles/homenav.module.scss"
import Link from "next/link";
import {motion} from "framer-motion"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch, faTimes} from "@fortawesome/free-solid-svg-icons";
import {faFacebookF, faInstagram, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";

const easingOne = [.6, -0.5, .01, .99];
const HomeNav = (props) => {
    const {
        setMenu
    } = props
    return (
        <motion.div
            initial={{
                y: 50
            }}

            
            animate={{
                y: 0
            }}
            exit={{
                y: 30
            }}
            style={{
                transform: "translate3d(-50%, 0, 0)"
            }}
            className={styles.homeNavMenu}>
            <div className={styles.homeNavHeader}>
                <div className={styles.logo}>
                    <Link href="/">
                        <img src="/images/logo.png"/>
                    </Link>
                </div>
                <motion.div
                    initial={{
                        x: -200,
                        opacity: 0
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        transition: {
                            duration: .6,
                            ease: easingOne
                        }
                    }}
                    className={styles.actions}>
                    <div className={styles.actionsItem}>
                        <FontAwesomeIcon icon={faSearch}/>
                    </div>
                    <div className={styles.actionsItem} onClick={() => setMenu(false)}>
                        <FontAwesomeIcon icon={faTimes}/>
                    </div>
                </motion.div>
            </div>
            <div className={styles.menuItems}>
                <motion.div
                    initial={{
                        x: -200,
                        opacity: 0
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        transition: {
                            duration: .6,
                            ease: easingOne
                        }
                    }}
                    className={styles.menuItemList}>
                    <div className={styles.menuItem}>
                        <div className="title">
                            About Us
                        </div>
                        <div className={styles.menuList}>
                            <Link href="/about-us">
                                <span>The Earth Foundation</span>
                            </Link>
                            <Link href="/about-us">
                                <span>The Adjudicating Panel</span>
                            </Link>
                            <Link href="/about-us">
                                <span>Our Ambassadors</span>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.menuItem}>
                        <div className="title">
                            Our Intiatives
                        </div>
                        <div className={styles.menuList}>
                            <Link href="/our-initiatives">
                                <span>The Earth Prize</span>
                            </Link>
                            <Link href="/our-initiatives">
                                <span>The Earth Foundation Awards</span>
                            </Link>
                            <Link href="/our-initiatives">
                                <span>The Earth Foundation Incubator Initiative</span>
                            </Link>
                            <Link href="/our-initiatives">
                                <span>The Earth Foundation Alumni</span>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.menuItem}>
                        <div className="title">
                            Our News
                        </div>
                    </div>
                    <div className={styles.menuItem}>
                        <div className="title">
                            Get Involved
                        </div>
                        <div className={styles.menuList}>
                            <Link href="/get-involved">
                                <span>Become a mentor</span>
                            </Link>
                            <Link href="/get-involved">
                                <span>Become part of our newtork</span>
                            </Link>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{
                        x: -200,
                        opacity: 0
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        transition: {
                            duration: .6,
                            ease: easingOne
                        }
                    }}
                    className={styles.socialIcons}>
                    <div className={styles.socialItem}>
                        <FontAwesomeIcon icon={faFacebookF}/>
                    </div>
                    <div className={styles.socialItem}>
                        <FontAwesomeIcon icon={faTwitter}/>
                    </div>
                    <div className={styles.socialItem}>
                        <FontAwesomeIcon icon={faInstagram}/>
                    </div>
                    <div className={styles.socialItem}>
                        <FontAwesomeIcon icon={faYoutube}/>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default HomeNav;

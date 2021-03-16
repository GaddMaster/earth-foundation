
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

import styles from "../styles/side.module.scss";

const Side = () => (
    <div className = {styles.side}>

        <div className = {styles.title}>
            <span>About Us</span>
        </div>
        <div className = {styles.item}>
          <Link href="earth-prize">The Earth Foundation</Link>
        </div>
      {/*<div className = {styles.item}>
          <Link href="earth-prize">The Adjudicating Panel</Link>
        </div>*/}
        <div className = {styles.item}>
          <Link href="advisers">Our Advisors</Link>
        </div>

        <br />

        <div className = {styles.title}>
            <span>Our Initiatives</span>
        </div>
        <div className = {styles.item}>
          <Link href="earth-prize">The Earth Prize</Link>
        </div>
        <div className = {styles.item}>
          <Link href="mentors">The Earth Prize Mentors</Link>
        </div>
        <div className = {styles.item}>
          <Link href="awards">The Earth Foundation Awards</Link>
        </div>
        <div className = {styles.item}>
          <Link href="incubator">The Earth Foundation Incubator</Link>
        </div>

      {/*<div className = {styles.title}>
            <span>News</span>
        </div>*/}

      <br />

        <div className = {styles.title}>
            <span>Get Involved</span>
        </div>
        <div className = {styles.item}>
          <Link href="https://theearthfoundation.typeform.com/to/iuEsLDX4">Become a mentor</Link>
        </div>
        <div className = {styles.item}>
          <Link href="sign-up">Become part of our network</Link>
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

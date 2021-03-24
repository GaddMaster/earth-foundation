
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { useRouter } from 'next/router';

import styles from "../styles/side.module.scss";

const Side = ({ onOpen }) => {
  const router = useRouter();

  const handleLinkClick = route => {
    if (router.pathname === route) {
      onOpen(false);
    } else {
      router.push(route);
    }
  }

  return (
    <div className = {styles.side}>

      <div className = {styles.title}>
        <span>About Us</span>
      </div>
      <div className = {styles.item} onClick={() => handleLinkClick("/about")}>
        <span>The Earth Foundation</span>
      </div>
      {/*<div className = {styles.item}>
          <Link href="earth-prize">The Adjudicating Panel</Link>
        </div>*/}
      <div className = {styles.item} onClick={() => handleLinkClick("/advisors")}>
        <span>Our Advisors</span>
      </div>

      <br />

      <div className = {styles.title}>
        <span>Our Initiatives</span>
      </div>
      <div className = {styles.item} onClick={() => handleLinkClick("/earth-prize")}>
        <span>The Earth Prize</span>
      </div>
      <div className = {styles.item} onClick={() => handleLinkClick("/mentors")}>
        <span>The Earth Prize Mentors</span>
      </div>
      <div className = {styles.item} onClick={() => handleLinkClick("/awards")}>
        <span>The Earth Foundation Awards</span>
      </div>
      <div className = {styles.item} onClick={() => handleLinkClick("/incubator")}>
        <span>The Earth Foundation Incubator</span>
      </div>

      {/*<div className = {styles.title}>
            <span>News</span>
        </div>*/}

      <br />

      <div className = {styles.title}>
        <span>Get Involved</span>
      </div>
      <div className = {styles.item} onClick={() => handleLinkClick("/mentors")}>
        <span>Become a mentor</span>
      </div>
      <div className = {styles.item} onClick={() => handleLinkClick("/sign-up")}>
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
}

export default Side;

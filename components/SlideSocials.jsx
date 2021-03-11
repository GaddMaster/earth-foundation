
import styles from "../styles/slide.socials.module.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookF, faInstagram, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';

const SlideSocials = ({ color }) => (
  <div
    className = {styles.section}
  >
    <div className = {styles.social} style={{ borderColor: color }}>
      <FontAwesomeIcon icon = {faYoutube} style={{ color: color }} />
    </div>
    <div className = {styles.social} style={{ borderColor: color }}>
      <FontAwesomeIcon icon = {faInstagram} style={{ color: color }} />
    </div>
    <div className = {styles.social} style={{ borderColor: color }}>
      <FontAwesomeIcon icon = {faTwitter} style={{ color: color }} />
    </div>
    <div className = {styles.social} style={{ borderColor: color }}>
      <FontAwesomeIcon icon = {faFacebookF} style={{ color: color }} />
    </div>
  </div>
);

export default SlideSocials;

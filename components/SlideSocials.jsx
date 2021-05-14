
import styles from "../styles/slide.socials.module.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookF, faInstagram, faTwitter, faLinkedinIn, faYoutube} from '@fortawesome/free-brands-svg-icons';

const SlideSocials = ({ color, style }) => (
  <div
    className = {styles.section}
    style = {{
      ...style,
    }}
  >
    <a href="https://www.linkedin.com/company/the-earth-foundation" target="_blank" className = {styles.social} style={{ borderColor: color }}>
      <FontAwesomeIcon icon = {faLinkedinIn} style={{ color: color }} />
    </a>
    <a href="https://www.instagram.com/theearthprize/" target="_blank" className = {styles.social} style={{ borderColor: color }}>
      <FontAwesomeIcon icon = {faInstagram} style={{ color: color }} />
    </a>
    <a href="https://twitter.com/earth_fdn" target="_blank" className = {styles.social} style={{ borderColor: color }}>
      <FontAwesomeIcon icon = {faTwitter} style={{ color: color }} />
    </a>
    <a href="https://www.facebook.com/TheEarthPrize" target="_blank" className = {styles.social} style={{ borderColor: color }}>
      <FontAwesomeIcon icon = {faFacebookF} style={{ color: color }} />
    </a>
    <a href="https://www.youtube.com/watch?v=_dLft2yTT_c" target="_blank" className = {styles.social} style={{ borderColor: color }}>
      <FontAwesomeIcon icon = {faYoutube} style={{ color: color }} />
    </a>
  </div>
);

export default SlideSocials;

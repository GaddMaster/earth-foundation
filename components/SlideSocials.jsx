
import styles from "../styles/slide.socials.module.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookF, faInstagram, faTwitter, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';

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
    <a href="https://www.instagram.com/the.earthfoundation" target="_blank" className = {styles.social} style={{ borderColor: color }}>
      <FontAwesomeIcon icon = {faInstagram} style={{ color: color }} />
    </a>
    <a href="https://twitter.com/earth_fdn" target="_blank" className = {styles.social} style={{ borderColor: color }}>
      <FontAwesomeIcon icon = {faTwitter} style={{ color: color }} />
    </a>
    <a href="https://www.facebook.com/the.earth.fdn" target="_blank" className = {styles.social} style={{ borderColor: color }}>
      <FontAwesomeIcon icon = {faFacebookF} style={{ color: color }} />
    </a>
  </div>
);

export default SlideSocials;

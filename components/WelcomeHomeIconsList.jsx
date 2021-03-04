import welcomeStyle from "../styles/welcome.module.css";
import {
  faInstagram,
  faYoutube,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function WelcomeHomeIconsList() {
  return (
    <>
      <ul className={welcomeStyle.iconsList}>
        <li>
          <FontAwesomeIcon
            className={welcomeStyle.icons}
            icon={faYoutube}
            width={"50px"}
            color={"white"}
          />
        </li>
        <li>
          <FontAwesomeIcon
            className={welcomeStyle.icons}
            icon={faInstagram}
            width={"50px"}
            color={"white"}
          />
        </li>
        <li>
          <FontAwesomeIcon
            className={welcomeStyle.icons}
            icon={faTwitter}
            width={"50px"}
            color={"white"}
          />
        </li>
        <li>
          <FontAwesomeIcon
            className={welcomeStyle.icons}
            icon={faFacebook}
            width={"50px"}
            color={"white"}
          />
        </li>
      </ul>
    </>
  );
}

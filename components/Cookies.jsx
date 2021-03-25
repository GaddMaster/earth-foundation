import Link from "next/link";
import styles from "../styles/cookies.module.scss";

const Cookies = ({ handleDeclineClick, handleAcceptClick }) => (
  <div className={styles.cookies}>
    <h3>THIS WEBSITE USES COOKIES.</h3>
    <p>We use cookies to provide you with the best possible experience. They also allow us to analyze user behavior in order to constantly improve the website for you. You can read more about our <Link href="/cookie-policy">Cookie Policy</Link> and <Link href="/privacy-policy">Privacy Policy</Link>.</p>
    <div className={styles.buttons}>
      <button
        className={styles.decline}
        onClick={handleDeclineClick}
      >
        Decline
      </button>
      <button
        className={styles.accept}
        onClick={handleAcceptClick}
      >
        Accept
      </button>
    </div>
  </div>
);

export default Cookies;

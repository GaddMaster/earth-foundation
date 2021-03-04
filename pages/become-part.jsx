import Link from "next/link";

import Layout from "components/Layout";

import ButtonBase from "@material-ui/core/ButtonBase";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import styles from "styles/becomePart.module.scss";

const BecomePart = () => {
  return (
    <Layout title="Welcome to our community" header>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1> Become part of out network</h1>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.subTextOne}>
          <span>
            The Earth Foundation is always looking for people passionate about
            environmental <br />
            sustainability who are seeking to connect with others.
          </span>
        </div>
        <div className={styles.subTextTwo}>
          <span>
            Join us to get the latest updates on what our community of inspiring
            individuals is up to, <br />
            share your ideas, or simply chat with us.
          </span>
        </div>
        <form className={styles.emailForm} action="#">
          <input
            className={styles.textInput}
            name="email"
            type="text"
            placeholder="Your Email Here"
          />
          <ButtonBase className={styles.button} onClick={() => {}}>
            <span>JOIN US</span>
          </ButtonBase>
        </form>
      </div>
    </Layout>
  );
};

export default BecomePart;

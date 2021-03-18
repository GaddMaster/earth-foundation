
import styles from "../styles/faq.module.scss";
import React, {useState} from 'react';
import {faPlus, faMinus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const FAQ = ({ question, answer }) => {
  const [isOpened, open] = useState(false);

  return (
    <div
      className={styles.faq}
      onClick={() => open(!isOpened)}
    >
      <div className={styles.wrapper}>
        {isOpened
          ? <FontAwesomeIcon icon = {faMinus} />
          : <FontAwesomeIcon icon = {faPlus} />
        }
        <p className={styles.question}>
          {question}
        </p>
      </div>
      {isOpened && (
        <p className={styles.answer}>{answer}</p>
      )}
    </div>
  )
};

export default FAQ;

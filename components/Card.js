
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import styles from "../styles/card.module.scss";

const Card = props => {
    return (
            <section className = {styles.card}>
                <div className = {styles.cover} style = {{ backgroundSize: props.imageCover ? 'cover' : 'contain', backgroundImage:`url(${props.image})` }} />
              <div className = {styles.wrapper}>
                <p className = {styles.label}>{props.label}
                </p>
                {props.text && (
                  <p className = {styles.summary}>{props.text}
                  </p>
                )}
              </div>
              {/* <div className = {styles.more}>
                    <span>Read More</span>
                    <FontAwesomeIcon icon = {faArrowRight} />
                </div> */}
              <Link href={props.route}>
                <button>{props.button}</button>
              </Link>
              {props.secondButton && (
                <Link className = {styles.secondary} href={props.secondButtonRoute}>
                  <button>{props.secondButton}</button>
                </Link>
              )}
            </section>
    );
};

export default Card;
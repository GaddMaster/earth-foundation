
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import styles from "../styles/card.module.scss";

const Card = props => {
    return (
            <section className = {styles.card}>
                <div className = {styles.cover} style = {{background:`url(${props.image})`}}></div>
              <div className = {styles.wrapper}>
                <div className = {styles.label}>
                  <span>{props.label}</span>
                </div>
                {props.text && (
                  <div className = {styles.summary}>
                    <span>{props.text}</span>
                  </div>
                )}
              </div>
              {/* <div className = {styles.more}>
                    <span>Read More</span>
                    <FontAwesomeIcon icon = {faArrowRight} />
                </div> */}
              <Link href={props.route}>
                <button>{props.button}</button>
              </Link>
            </section>
    );
};

export default Card;
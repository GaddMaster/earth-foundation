
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/card.module.scss";

const Card = props => {
    return (
            <section className = {styles.card}>
                <div className = {styles.cover} style = {{background:`url(${props.image})`}}></div>
                <div className = {styles.label}>
                    <span>{props.label}</span>
                </div>
                <div className = {styles.summary}>
                    <span>{props.summary}</span>
                </div>
                <div className = {styles.more}>
                    <span>Read More</span>
                    <FontAwesomeIcon icon = {faArrowRight} />
                </div>
            </section>
    );
};

export default Card;
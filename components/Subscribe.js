

import InputBase from "@material-ui/core/InputBase";
import ButtonBase from "@material-ui/core/ButtonBase";
import { motion } from "framer-motion";

import styles from "../styles/subscribe.module.scss";

const Subscribe = props => {
    return (
        <section className = {styles.subscribe}>
            <div className = {styles.block}>
                <div className = {styles.label}>
                    <span className = {styles.labels}>Passionate about our initiatives?</span>
             
                <InputBase
                    placeholder = "Your Email Here"
                        className = {styles.input}
                        onChange = {()=>{}} />
                <ButtonBase
                    className = {styles.button}
                    onClick = {()=>{}}>
                    <span>Join Us</span>
                </ButtonBase>
                </div>
            </div>
        </section>
    );
};

export default Subscribe;
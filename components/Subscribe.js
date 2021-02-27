
import { useState } from "react";

import InputBase from "@material-ui/core/InputBase";
import ButtonBase from "@material-ui/core/ButtonBase";

import http from "../utils/http";

import styles from "../styles/subscribe.module.scss";

const Subscribe = props => {
    let [email, onEmail] = useState("");
    const onChange = () => e => onEmail(e.target.value);
    const onSubscribe = () => {
        http.request("PUT", "/api/subscribe", { email });
        onEmail("");
        alert("Subscribed");
    };
    return (
        <section className = {styles.subscribe}>
            <div className = {styles.block}>
                <div className = {styles.label}>
                    <span>Passionate about our initiatives?</span>
                </div>
                <InputBase
                    placeholder = "Your Email Here"
                    className = {styles.input}
                    value = {email}
                    onChange = {onChange()} />
                <ButtonBase
                    className = {styles.button}
                    onClick = {onSubscribe}>
                    <span>Join Us</span>
                </ButtonBase>
            </div>
        </section>
    );
};

export default Subscribe;
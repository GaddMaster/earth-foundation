
import { useState } from "react";
import PropTypes from "prop-types";

import InputBase from "@material-ui/core/InputBase";
import ButtonBase from "@material-ui/core/ButtonBase";

import http from "utils/http";

import styles from "styles/subscribe.module.scss";

const Subscribe = props => {
    let [email, onEmail] = useState("");
    const onChange = () => e => onEmail(e.target.value);
    const onSubscribe = () => {
        http.request("PUT", "/api/subscribe", { email });
        onEmail("");
        alert("Subscribed");
    };
    return (
        <section className = {styles.container} style = {{background:props.background.outer}}>
            <div className = {styles.inner}>
                <div className = {styles.padding} style = {{background:props.background.inner}}>
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
                    <div className = {styles.wall} style = {{background:props.background.inner}}></div>
                </div>
            </div>
        </section>
    );
};

Subscribe.propTypes = {
    background: PropTypes.object
};

Subscribe.defaultProps = {
    background: {
        outer: "whitesmoke",
        inner: "white"
    }
};

export default Subscribe;
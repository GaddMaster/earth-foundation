
import {useEffect, useState} from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import InputBase from "@material-ui/core/InputBase";
import ButtonBase from "@material-ui/core/ButtonBase";

import http from "utils/http";

import styles from "styles/subscribe.module.scss";
import {useRouter} from 'next/router';

const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Subscribe = props => {
    const router = useRouter();
    let [email, onEmail] = useState("");
    let [isDisabled, disable] = useState(true);
    const onChange = () => e => onEmail(e.target.value);
    const onSubscribe = () => {
        http.request("PUT", "/api/subscribe/general", { email });
        onEmail("");
        router.push('/welcome');
    };
    useEffect(() => {
        if (regExp.test(email)) {
            disable(false);
        } else {
            disable(true);
        }
    }, [email]);

    return (
        <section className = {styles.container} style = {{background:props.background.outer}}>
            <div className = {styles.inner}>
                <div className = {styles.padding} style = {{background:props.background.inner}}>
                    <div className = {styles.label}>
                        <span>Passionate about our initiatives?</span>
                    </div>
                    <div className = {styles.inputWrapper}>
                        <InputBase
                          placeholder = "Your Email Here"
                          className = {styles.input}
                          value = {email}
                          onChange = {onChange()} />
                        <p className = {styles.agree}>By submitting your email you agree to our <Link href="/privacy-policy">Privacy Policy</Link>.</p>
                    </div>
                    <ButtonBase
                        className = {styles.button}
                        disabled = {isDisabled}
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
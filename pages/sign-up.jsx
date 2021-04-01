
import Link from "next/link";

import Layout from "components/Layout";

import InputBase from "@material-ui/core/InputBase";
import ButtonBase from "@material-ui/core/ButtonBase";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import styles from "styles/become.part.module.scss";
import SlideSection from 'components/SlideSection';
import SlideSocials from 'components/SlideSocials';
import React, {useEffect, useState} from 'react';
import http from 'utils/http';
import {useRouter} from 'next/router';

const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const SignUp = () => {
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
        <Layout 
            title = "Welcome to our community" 
            header>
            <div className = {styles.container}>
                <SlideSection height={35} name="Become part of out network" color="#FFFFFF" />
                <SlideSocials color="#FFFFFF" />
                <div className = {styles.title}>
                    <div>Become part</div>
                    <div>of our network</div>
                </div>
                <div className = {styles.divider}></div>
                <div className = {styles.sub}>
                    <span>The Earth Foundation is always looking for people passionate about environmental sustainability who are seeking to connect with others.</span>
                </div>
                <div className = {styles.sub}>
                    <span>Join us to get the latest updates on what our community of inspiring individuals is up to, share your ideas, or simply chat with us.</span>
                </div>
                <div className = {styles.form}>
                    <div className = {styles.inputWrapper}>
                        <InputBase
                          className = {styles.input}
                          name = "email"
                          type = "text"
                          value = {email}
                          onChange = {onChange()}
                          placeholder = "Your Email Here" />
                        <p className = {styles.agree}>By submitting your email you agree to our <Link href="/privacy-policy">Privacy Policy</Link>.</p>
                    </div>
                    <ButtonBase 
                        className = {styles.button}
                        disabled = {isDisabled}
                        onClick = {onSubscribe}>
                        <span>join us</span>
                    </ButtonBase>
                </div>
                <Link href = "/">
                    <div className = {styles.home}>
                        <span>Back To The Homepage</span>
                        <FontAwesomeIcon icon = {faArrowRight} />
                    </div>
                </Link>
            </div>
        </Layout>
    );
};

export default SignUp;

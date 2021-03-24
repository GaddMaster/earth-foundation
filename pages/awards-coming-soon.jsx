import Layout from "components/Layout";
import styles from "styles/awards-coming-soon.module.scss";
import ButtonBase from "@material-ui/core/ButtonBase";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import SlideSection from 'components/SlideSection';
import SlideSocials from 'components/SlideSocials';
import React, {useEffect, useState} from 'react';
import http from 'utils/http';
import InputBase from '@material-ui/core/InputBase';
import {useRouter} from 'next/router';
import Head from 'next/head';

const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const AwardsComingSoon = () => {
    const router = useRouter();
    let [email, onEmail] = useState("");
    let [emailSubmitted, setEmailSubmitted] = useState(false);
    let [isDisabled, disable] = useState(true);
    const onChange = () => e => onEmail(e.target.value);
    const onSubscribe = () => {
        http.request("PUT", "/api/subscribe/awards-reminder", { email });
        onEmail("");
        setEmailSubmitted(true);
    };
    useEffect(() => {
        if (regExp.test(email)) {
            disable(false);
        } else {
            disable(true);
        }
    }, [email]);

    return (
      <>
          <Head>
              <title>Thank you!</title>
          </Head>
        <Layout
            title = "Welcome to our community"
            header
        >
            <div className={styles.container}>
                <SlideSection height={20} name="the Earth Foundation Awards" color="#FFFFFF" />
                <SlideSocials color="#FFFFFF" />
                <div className = {styles.title}>
                    <h1>Thank you!</h1>
                </div>
                <div className={styles.divider}></div>
                <div className = {styles.sub}>
                    <span>Thank you for your interest in The Earth Foundation Awards.</span>
                </div>
                <div className={styles.description}>
                    <span> The application will open in Fall 2021. Sign up below to receive a reminder so you do not miss the deadline.</span>
                </div>
                {emailSubmitted
                    ? (
                    <p className = {styles.success}>You have successfully signed-up for our reminder.</p>
                  )
                    : (
                    <div className={styles.buttonArea}>
                        <InputBase
                          placeholder = "Your Email Here"
                          className = {styles.input}
                          value = {email}
                          onChange = {onChange()} />
                        <ButtonBase
                          className = {styles.buttonSubmit}
                          disabled = {isDisabled}
                          onClick = {onSubscribe}>
                            <span>Submit</span>
                        </ButtonBase>
                    </div>
                  )
                }
                <Link href = "/">
                    <div className={styles.back}>
                        <span>back to home page</span>
                        <FontAwesomeIcon icon = {faArrowRight} />
                    </div>
                </Link>
            </div>
        </Layout>
      </>
    );
};

export default AwardsComingSoon;

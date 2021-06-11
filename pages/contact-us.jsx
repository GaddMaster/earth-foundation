
import Layout from "../components/Layout";

import styles from "styles/contact-us.module.scss";
import React, {useEffect, useState} from 'react';
import Input from 'components/Input';
import Textarea from 'components/Textarea';
import Recaptcha from 'components/Recaptcha';
import Head from 'next/head';
import http from "utils/http";

const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const ContactUs = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [organization, setOrganization] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [captcha, setCaptcha] = useState(false);
    const [emailSent, setEmailSent] = useState(false);
    const [submitDisabled, setSubmitDisabled] = useState(true);

    const onCaptchaChange = value => setCaptcha(value);

    useEffect(() => {
        if (
            firstName.length > 0 &&
            lastName.length > 0 &&
            message.length > 0 &&
            regExp.test(email) &&
            captcha
        ) {
        setSubmitDisabled(false);
        }
    }, [firstName, lastName, message, email, captcha]);

    const onSubmitClick = () => {
        console.log("SENDING");
        const name = `${firstName} ${lastName}`;
        const subject = `Contact request from ${name} ${organization && `(${organization})`}`;
        http.request("PUT", "/api/email", { email, name, subject, message }, ({ error, message }) => {
            console.log(`${error} ${message}`);
            if (!error) {
              setEmailSent(true);
              setFirstName('');
              setLastName('');
              setOrganization('');
              setEmail('');
              setMessage('');
            }
        });
    };

  return (
      <>
        <Head>
          <title>Contact Us</title>
        </Head>
        <Layout 
            title = "Contact Us"
            background = "whitesmoke"
            header
        >
            <div className = {styles.wrapper}>
                <div className = {styles.container}>
                  <h1 className={styles.title}>Contact Us</h1>
                  <div className={styles.divider} />
                  <p className={styles.text}>The Earth Foundation is a nonprofit, tax-exempt organization under articles 80 and the following of the Swiss Civil Code.</p>
                    <p className={styles.address}>Address: 15 Rue de Rive, 1204, Geneva, Switzerland</p>
                    <form>
                      <div className={styles.inputsWrapper}>
                        <div>
                          <Input
                            name="firstName"
                            id="firstName"
                            placeholder="First Name"
                            value={firstName}
                            onChange={({ target }) => setFirstName(target.value)}
                          />
                          <Input
                            name="lastName"
                            id="lastName"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={({ target }) => setLastName(target.value)}
                          />
                          <Input
                            name="organization"
                            id="organization"
                            placeholder="Organization (if applicable)"
                            value={organization}
                            onChange={({ target }) => setOrganization(target.value)}
                          />
                          <Input
                            name="email"
                            id="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={({ target }) => setEmail(target.value)}
                          />
                        </div>
                        <div>
                          <Textarea
                            name="message"
                            id="message"
                            placeholder="Your Message"
                            value={message}
                            onChange={({ target }) => setMessage(target.value)}
                          />
                        </div>
                      </div>
                      <div className={styles.buttonsWrapper}>
                        <Recaptcha onChange={onCaptchaChange} />
                        <button
                          type = "button"
                          className = {styles.button}
                          onClick = {onSubmitClick}
                          disabled={submitDisabled}
                        >
                          <span>Send Message</span>
                        </button>
                      </div>
                      {emailSent && (
                        <p className={styles.sent}>Thank you for contacting The Earth Foundation. <br />We will get back to you as soon possible.</p>
                      )}
                    </form>
                </div>
            </div>
        </Layout>
      </>
    );
};

export default ContactUs;

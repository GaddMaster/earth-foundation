
import Layout from "../components/Layout";
import Link from "next/link";

import styles from "styles/legal.module.scss";
import React from 'react';
import Head from 'next/head';


const PrivacyPolicy = () => {

    return (
      <>
          <Head>
              <title>The Earth Foundation Cookie Policy</title>
          </Head>
        <Layout 
            title = "The Earth <br/> Prize"
            background = "whitesmoke"
            header
            footer
        >
            <div className={styles.container}>
                <h1>THE EARTH FOUNDATION COOKIE POLICY</h1>
                <p className={styles.centered}>We use cookies on this website <Link href="/">https://earth-foundation.org</Link> (the “Website”), as explained in this cookie policy. Below, you can find detailed information about the types of our cookies, their purposes, and your right to manage cookies.</p>
                <h2><span>1.</span> WHO IS RESPONSIBLE FOR COOKIES ON THE WEBSITE?</h2>
                <p>The data controller that is responsible for the processing of personal data through the Website, including placing first-party cookies, is The Earth Foundation having a registered address at 15 Rue de Rive, 1204 Genève, Switzerland, and the registration number CHE-439.560.973 (“<b>we</b>”, “<b>us</b>”, or “<b>our</b>”).</p>
                <h2><span>2.</span> WHAT SHOULD I KNOW ABOUT COOKIES?</h2>
                <p>A cookie is a small piece of data typically consisting of letters and numbers. When you visit a website, that website may send a cookie to your browser. Subsequently, the browser may store the cookie on your computer or mobile device for some time (cookie expiration date depends on its type). Cookies are used to recognize your device and collect certain information about your use of websites. Thus, over time, cookies allow websites to “remember” your actions and preferences. There are several types of cookies, namely, (i) persistent cookies, which remain valid until deleted by you, (ii) cookies that remain valid until their expiration date, and (iii) session cookies that are stored on a web browser and remain valid until the moment the browser is closed. Cookies may also be (i) first-party cookies (set by the original website itself) and (ii) third-party cookies (placed by third-party websites).</p>
                <h2><span>3.</span> WHAT COOKIES DO WE USE?</h2>
                <p>We use statistics cookies that allow us to generate statistical reports about how you use the Website. Below, you can find a list of cookies that we use on the Website, including their purpose and expiration time:</p>
                <div className={styles.table}>
                    <table>
                        <thead>
                        <tr>
                            <th colSpan="5">Statistics cookies</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Name</td>
                            <td>Type</td>
                            <td>Provider (location)</td>
                            <td>Expiration</td>
                            <td>Purpose</td>
                        </tr>
                        <tr>
                            <td>_ga</td>
                            <td>First-party HTTP cookie</td>
                            <td><Link href="/">earth-foundation.org</Link> (Switzerland)</td>
                            <td>2 years</td>
                            <td>The cookie is used to set a unique ID that is used to generate statistical data on how you use the Website.</td>
                        </tr>
                        <tr>
                            <td>_gat</td>
                            <td>First-party HTTP cookie</td>
                            <td><Link href="/">earth-foundation.org</Link> (Switzerland)</td>
                            <td>1 day</td>
                            <td>The cookie is used by Google Analytics to throttle request rate.</td>
                        </tr>
                        <tr>
                            <td>_gid</td>
                            <td>First-party HTTP cookie</td>
                            <td><Link href="/">earth-foundation.org</Link> (Switzerland)</td>
                            <td>1 day</td>
                            <td>The cookie is used to set a unique ID that is used to generate statistical data on how you use the Website.</td>
                        </tr>
                        <tr>
                            <td>collect</td>
                            <td>Third-party Pixel cookie</td>
                            <td><Link href="/">earth-foundation.org</Link> (Switzerland)</td>
                            <td>End of session</td>
                            <td>The cookie is used to send data to Google Analytics about your device and behavior. It tracks you across devices and marketing channels.</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <h2><span>4.</span> COOKIE CONSENT</h2>
                <p>When you visit the Website for the first time, we may ask you to provide us with your consent to our use of all cookies via a cookie consent banner. If you do not provide your opt-in consent, we will not serve you our non-essential cookies. Please note that we may not be able to provide you with the best possible user experience on the Website if not all cookies are enabled.</p>
                <h2><span>5.</span> HOW TO DISABLE COOKIES?</h2>
                <p>When we ask you to provide your consent to our use of non-essential cookies, you have the freedom not to provide such consent. If you would like to refuse our use of non-essential cookies later, you can do it at any time by declining cookies in your browser or device. For more information, you can consult the cookie management instructions of your browser:</p>
                <ul>
                    <li><b>Apple Safari:</b> <Link href="https://support.apple.com/en-gb/guide/safari/manage-cookies-and-website-data-sfri11471/mac">https://support.apple.com/en-gb/guide/safari/manage-cookies-and-website-data-sfri11471/mac</Link></li>
                    <li><b>Google Chrome:</b> <Link href="https://support.google.com/chrome/answer/95647">https://support.google.com/chrome/answer/95647</Link></li>
                    <li><b>Firefox:</b> <Link href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences">https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences</Link></li>
                    <li><b>Internet Explorer:</b> <Link href="https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies">https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies</Link></li>
                    <li><b>Microsoft Edge:</b> <Link href="https://support.microsoft.com/en-us/help/4468242/microsoft-edge-browsing-data-and-privacy-microsoft-privacy">https://support.microsoft.com/en-us/help/4468242/microsoft-edge-browsing-data-and-privacy-microsoft-privacy</Link></li>
                </ul>
                <h2><span>6.</span>GOOGLE ANALYTICS</h2>
                <p>To analyze your use of the Website, we use Google Analytics, the business analytics service provided by Google LLC located in the United States (“Google”). Google generates statistical information by means of cookies and creates reports about your use of the Website. The cookies served by Google Analytics are anonymous first-party cookies (please refer to section 3 for more information) that do not allow us to identify you in any manner. The information generated by cookies will be transmitted to and stored by Google on servers in the United States. To ensure your privacy, your IP address will be anonymized and Google will not combine your IP address with other information Google holds about you. Thus, Google will not be able to identify you. In certain cases (e.g. when required by law or when third parties conduct services on behalf of Google), Google may transfer the information to third parties. For more information about Google Analytics’ privacy practices, please visit <Link href="https://support.google.com/analytics/answer/6004245">https://support.google.com/analytics/answer/6004245</Link>. If you would like to opt out from Google Analytics, you can do so by installing a Google Analytics opt-out browser add-on available at <Link href="https://tools.google.com/dlpage/gaoptout?hl=en">https://tools.google.com/dlpage/gaoptout?hl=en</Link>.</p>
                <h2><span>7.</span>GOOGLE reCAPCHA</h2>
                <p>We use reCAPCHA on the Website, the service provided by Google, to verify whether you are a human being and not a robot. It helps to protect our website against spam and abuse. The reCAPTCHA analysis takes place in the background. When you use reCAPCHA, Google will collect some personal and non-personal data from you, such as:</p>
                <ul>
                    <li>All cookies set to your browser by Google in the last 6 months;</li>
                    <li>Information about your mouse clicks;</li>
                    <li>CSS information;</li>
                    <li>Date;</li>
                    <li>Browser language;</li>
                    <li>Any plug-in installed in the browser; and</li>
                    <li>Javascript objects.</li>
                </ul>
                <p>The above-mentioned data will be sent to Google located in the United States. We have a legitimate interest in protecting the Site from abusive automated crawling and spam. For more information about Google reCAPTCHA and Google’s privacy policy, please visit the following links: <a href="https://www.google.com/intl/de/policies/privacy/" target="_blank">https://www.google.com/intl/de/policies/privacy/</a> and <a href="https://www.google.com/recaptcha/intro/v3.html" target="_blank">https://www.google.com/recaptcha/intro/v3.html</a>.</p>
                <h2><span>7.</span> CONTACT</h2>
                <p className={styles.subtitle}>If you have any questions about this cookie policy or our data protection practices, please contact us by using the following contact details:</p>
                <div className={styles.contact}>
                    <p><b>Email:</b> info@earth-foundation.org</p>
                    <div className={styles.address}>
                        <p><b>Postal address:</b></p>
                        <div>
                            <p>The Earth Foundation</p>
                            <p>15 Rue de Rive</p>
                            <p>1204 Genève</p>
                            <p>Switzerland</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
      </>
    );
};

export default PrivacyPolicy;

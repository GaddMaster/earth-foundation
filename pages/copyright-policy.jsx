
import Layout from "../components/Layout";
import Link from "next/link";

import styles from "styles/legal.module.scss";
import React from 'react';
import Head from 'next/head';

const CopyrightPolicy = () => {

    return (
      <>
          <Head>
              <title>The Earth Foundation Copyright Policy</title>
          </Head>
        <Layout 
            title = "The Earth <br/> Prize"
            background = "whitesmoke"
            header
            footer
        >
            <div className={styles.container}>
                <h1>THE EARTH FOUNDATION COPYRIGHT POLICY</h1>
                <p className={styles.centered}>This Earth Foundation Copyright Policy is incorporated by reference into <Link href="/terms-and-conditions">The Earth Foundation Terms and Conditions</Link> (the “<b>Terms</b>”) and forms a part thereto. Any capitalized terms not defined herein have the meaning defined in the Terms.</p>
                <h2><span>1.</span> YOUR CONTENT</h2>
                <p>By submitting any content to us through the Website (other than personal data) (“Your Content”), you grant us unrestricted, sub-licensable, royalty-free, perpetual, and irrevocable rights to use, distribute, advertise, adapt, remix, modify, publicly display, excerpt, prepare derivative works of, and reproduce Your Content for the purposes of carrying out our legitimate interests (e.g. to offer, maintain, and promote the Website).</p>
                <br />
                <p>You agree not to submit Your Content that violates the Terms or any applicable laws, including intellectual property rights of others (copyright, trademarks, and alike) and you agree to pay all royalties, fees, and any other monies applicable to Your Content. You are not allowed to submit any content that you have not made or that you are not authorized to use. Also, Your Content should not contain any materials protected by copyright, including music tracks, photos, videos, programs, and texts, if you do not have the necessary authorization to use such materials.</p>
                <br />
                <p>You understand and agree that, in order to ensure the security of the Website, we may, but have no obligation to, monitor or review Your Content. We reserve the right, at our sole discretion, to refuse to upload, modify, delete, or remove Your Content, in whole or in part, that violates these Terms or may harm our reputation. However, you remain solely responsible for Your Content.</p>
                <h2><span>2.</span> OUR CONTENT</h2>
                <p>Most of the content made available by us on the Website (excluding Your Content), is owned by us, our partners, agents, licensors, vendors, and/or other content providers (“<b>Our Content</b>”). Our Content includes, but is not limited to, text, images, audiovisual content, source code, trademarks, service marks, and trade names. Our Content is protected by the applicable intellectual property laws and international treaties. You are not allowed, without obtaining prior written authorization from us, to copy, distribute, make available, disassemble, make alterations, decompile, reverse engineer, translate, adapt, rent, loan, use, lease or attempt to grant other rights to Our Content to third parties, or use any manual or automated means to scrape any content available on the Website.</p>
                <h2><span>3.</span> THIRD-PARTY INTELLECTUAL PROPERTY</h2>
                <p>Some of the intellectual property assets, such as Your Content and trademarks, featured on the Website may be owned by you or third parties. Such third-party intellectual property does not belong to us and it remains the sole property of the respective third-party proprietors.</p>
                <h2><span>4.</span> FAIR USE POLICY</h2>
                <p>In the US and other countries, it may be possible to reuse materials protected by copyright without obtaining permission from a copyright holder under certain circumstances (‘fair use’). Such fair use is determined on a case-by-case basis and different rules may apply in different countries. For example, copyright-protected works used for teaching, commentary, criticism, news, or research may fall within the scope of fair use and, therefore, you may not need authorization to use such works. We strongly recommend consulting a qualified lawyer to seek advice and make prior assessment of your materials that you intend to use under the fair use doctrine. We do not provide advice or assessments regarding Your Content or fair use policies applicable to you.</p>
                <h2><span>5.</span> COPYRIGHT INFRINGEMENT CLAIMS</h2>
                <p>We respect intellectual property rights. If you have any grounds to believe that any content made available through the Website violates your or third party’s intellectual property rights, please contact us by email.  In order to write a proper copyright infringement notice, please perform the following steps:</p>
                <ul>
                    <li>Identify with sufficient detail the copyrighted work that you believe has been infringed;</li>
                    <li>Identify the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled, and information reasonably sufficient to permit us to locate the material;</li>
                    <li>Provide us with information reasonably sufficient to permit us to contact the complaining party, such as an address, telephone number, and, if available, an email address at which the complaining party may be contacted;</li>
                    <li>Add the following statement: <i>“I have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law”</i>;</li>
                    <li>Add the following statement: <i>“I swear, under penalty of perjury, that the information in the notification is accurate, and that I am the copyright owner or am authorized to act on behalf of the owner of an exclusive right that is allegedly infringed”</i>;</li>
                    <li>Sign the document; and</li>
                    <li>Send the document to us by email (info@earth-foundation.org) or post: The Earth Foundation, 15 Rue de Rive, 1204 Genève, Switzerland.</li>
                </ul>
                <p>Please note that you will be liable for damages, including costs and attorney’s fees, if you materially misrepresent that material is infringing your copyright(s). Therefore, if you are not sure if you are the proper copyright holder or if copyright laws protect the material of yours, you may need to consult a lawyer.</p>
            </div>
        </Layout>
      </>
    );
};

export default CopyrightPolicy;

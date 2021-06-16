
import Layout from "../components/Layout";

import styles from "styles/webinar-teachers-schools.module.scss";
import SlideSection from 'components/SlideSection';
import SlideSocials from 'components/SlideSocials';
import React, {useEffect, useState} from 'react';
import content from "assets/content";
import Subscribe from 'components/Subscribe';
import Link from 'next/link';
import Head from 'next/head';
import PersonModal from 'components/PersonModal';


const Webinar = () => {
  let [index, onIndex] = useState(0);
  let [isModalOpened, openModal] = useState(false);
  let active = content.webinarMentors[index];
  const existingPeople = content.webinarMentors.filter(person => !person.isUnknown);

  const handleOnPersonClick = index => {
    onIndex(index);
    if (!isModalOpened) {
      openModal(true);
    }
  }

  useEffect(() => {
    const body = document.body;
    window.addEventListener('scroll', () => {
      document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
    });

    if (isModalOpened) {
      const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
      body.style.position = 'fixed';
      body.style.top = `-${scrollY}`;
    } else {
      const scrollY = body.style.top;
      body.style.position = '';
      body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }, [isModalOpened]);
    return (
      <>
        <Head>
          <title>The Earth Prize Webinar for Mentors</title>
          <meta name="og:title" property="og:title" content="The Earth Prize Webinar for Mentors" />
        </Head>
        <Layout
            title = "The Earth <br/> Prize"
            background = "whitesmoke"
            header
            footer
        >
            <SlideSection height={35} name="Mentors webinar" color="#CEAA7A" />
            <SlideSocials color="#CEAA7A" style={{ top: '220px' }} />
            <div className = {styles.wrapper}>
                <div className = {styles.container}>
                    <h1 className={styles.title}>The Earth Prize <br /> Webinar for Mentors
                    </h1>
                    <p className={styles.text}>This webinar will give higher education students interested in participating in The Earth Prize as Mentors an opportunity to learn more about the role. In this panel discussion, participants will hear from Julie Rufino, The Earth Foundation's Head of Strategy, and Anett Thomson, Strategy and Operations Associate, about the importance of mentoring for the competition. Attendees will also hear from Steven Monfort, Director of the Smithsonian’s National Zoo and Conservation Biology Institute in Washington DC, USA, and member of The Earth Prize's Adjudicating Panel.</p>
                  <Link href="https://zoom.us/webinar/register/WN_dfO3iY0STcuQQFd0-0PKDQ">
                        <button className={styles.button}>Register for The Earth Prize Webinar for Mentors</button>
                    </Link>
                  <h1 style={{ color: '#064C40' }}>Event Speakers</h1>
                  <div className={styles.speakersWrapper}>
                    {content.webinarMentors.map((speaker, i) => (
                      <div key={speaker.name} className={styles.speakerWrapper} onClick = {() => handleOnPersonClick(i)}>
                        <div className = {styles.image}>
                          <img src = {speaker.avatar} />
                        </div>
                        <p className = {styles.name}>{speaker.name}</p>
                      </div>
                    ))}
                  </div>
                  {isModalOpened && (
                    <PersonModal
                      person={active}
                      onCloseClick={() => openModal(false)}
                      onNextClick={() => onIndex(index === existingPeople.length - 1 ? 0 : index + 1)}
                      onBackClick={() => onIndex(index === 0 ? existingPeople.length - 1 : index - 1)}
                    />
                  )}
                </div>
            </div>
            <Subscribe
              background = {{
                  outer: "whitesmoke",
                  inner: "white"
              }} />
        </Layout>
      </>
    );
};

export default Webinar;

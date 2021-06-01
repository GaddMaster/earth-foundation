
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
  let active = content.webinarTeachersSchools[index];
  const existingPeople = content.webinarTeachersSchools.filter(person => !person.isUnknown);

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
          <title>The Earth Prize Webinar for Teachers & Schools</title>
          <meta name="description" content="This webinar will give educators, teachers, and school administrators an opportunity to ask The Earth Foundation's CEO, Angela McCarthy, and the Head of Strategy, Julie Rufino, their questions regarding participation in The Earth Prize. Attendees will also hear from Karen Wilson, expert on innovation, entrepreneurship, finance, and impact measurement, and member of The Earth Prize's Adjudicating Panel."/>
          <meta name="og:title" property="og:title" content="The Earth Prize Webinar for Teachers & Schools" />
          <meta name="og:image" content="/images/logo.png" />
          <meta name="og:description" property="og:description" content="This webinar will give educators, teachers, and school administrators an opportunity to ask The Earth Foundation's CEO, Angela McCarthy, and the Head of Strategy, Julie Rufino, their questions regarding participation in The Earth Prize. Attendees will also hear from Karen Wilson, expert on innovation, entrepreneurship, finance, and impact measurement, and member of The Earth Prize's Adjudicating Panel." />
        </Head>
        <Layout
            title = "The Earth <br/> Prize"
            background = "whitesmoke"
            header
            footer
        >
            <SlideSection height={35} name="Teachers & Schools webinar" color="#CEAA7A" />
            <SlideSocials color="#CEAA7A" style={{ top: '220px' }} />
            <div className = {styles.wrapper}>
                <div className = {styles.container}>
                    <h1 className={styles.title}>The Earth Prize <br /> Webinar for Teachers & Schools
                    </h1>
                    <p className={styles.text}>Watch The Earth Prize Webinar for Teachers and Schools to hear Angela McCarthy (CEO at The Earth Foundation), Julie Rufino (Head of Strategy at The Earth Foundation), and Karen Wilson (Member of The Earth Prize Adjudicating Panel and expert on innovation, entrepreneurship, finance, and impact measurement) answer live questions about The Earth Prize from teachers and school administrators.</p>
                  <Link href="Watch The Earth Prize Webinar for Teachers and Schools">
                        <button className={styles.button}>Watch The Earth Prize Webinar for Teachers and Schools</button>
                    </Link>
                  <h1 style={{ color: '#064C40' }}>Event Speakers</h1>
                  <div className={styles.speakersWrapper}>
                    {content.webinarTeachersSchools.map((speaker, i) => (
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

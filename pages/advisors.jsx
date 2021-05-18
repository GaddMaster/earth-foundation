
import Layout from "../components/Layout";
import TitleDesc from "components/TitleDesc";

import styles from "../styles/advisers.module.scss";
import Subscribe from "../components/Subscribe";
import React, {useEffect, useState} from 'react';
import SlideSection from 'components/SlideSection';
import SlideSocials from 'components/SlideSocials';
import {useMediaQuery} from 'react-responsive';
import PersonModal from 'components/PersonModal';
import Head from 'next/head';

const advisors = [
  {
    avatar: "/images/marioo/mario.jpg",
    image: "/images/marioo/portrait.jpg",
    name: "Prof. Mario Salomone",
    isUnknown: false,
    paragraphs: [
      "Mario Salomone is an environmental sociologist and serves as Secretary-General of the World Environmental Education Congress Network. He teaches the Master in Socio-environmental Sustainability of Agri-food Networks at the University of Torino. He has previously taught at the University of Bergamo and at IULM University in Milano. He sits on the Boards at UNESCO Chair on Sustainable Development and Territory Management-Torino University, and at Italian Chapter of Club of Rome."
    ],
  },
  {
    avatar: "/images/philippe/avatar.jpg",
    image: "/images/philippe/portrait.jpg",
    name: "Prof. Philippe Gillet",
    isUnknown: false,
    paragraphs: [
      "A geologist by training, Philippe Gillet is genuinely passionate by the Earth and the Solar system from its origin to its current functioning. He was the Director of the CNRS Institut National des Sciences de l’Univers (France), involved in research projects aimed at responding to today’s major scientific and global challenges, such as the effects of climate change, sustainable development solutions or the evaluation of renewable energies. Gillet chairs the Scientific Advisory Board of INRAE (France), the world's number one institute for research on agriculture, food, and the environment. He is a prolific scientific author, with over 200 publications."
    ],
  },
  {
    avatar: "/images/alisia/avatar.jpg",
    image: "/images/alisia/portrait.jpg",
    name: "Alisia Grenville",
    isUnknown: false,
    paragraphs: [
      "Alisia Grenville is a lawyer specializing in ethics and behavioral corporate compliance and designs and builds high performing teams. Alisia earned a diploma with distinction in International Compliance from the University of Manchester & ICA, an LLB/J.D. from the University of Sussex, a Civil Law Certificate from the Université d’Avignon, a B.A. with Honors in French and Italian from Queen’s University of Kingston, as well as a Diploma in Italian Language & Cultural Studies Cum Laude from L’Università di Siena per Stranieri. She is also both a picture book author of the children’s series Sela Blue, and the creator and founder of MaRen Designs.  She lives in Switzerland with her husband and three children."
    ],
  },
];

const Advisors = () => {
    const isMobile = useMediaQuery({
      query: `(max-width: 600px)`,
    });
    let [index, onIndex] = useState(0);
    let [isModalOpened, openModal] = useState(false);
    let active = advisors[index];
    const existingPeople = advisors.filter(person => !person.isUnknown);

    const handleOnPersonClick = index => {
      onIndex(index);
      if (isMobile && !isModalOpened) {
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
          <title>The Earth Foundation Advisors</title>
        </Head>
        <Layout
          title = "The Earth Foundation Advisors"
          background = "whitesmoke"
          header
          footer
        >
          <SlideSection height={30} name="The Earth Foundation Advisors" color="#CEAA7A" />
          <SlideSocials color="#CEAA7A" style={{ top: '220px' }} />
          <div className = {styles.container}>
            <TitleDesc
              paragraphs = {(
                <p>The Earth Foundation’s mission is to inspire, educate, mentor, and empower youth to accelerate positive change towards environmental sustainability. In achieving this mission, The Earth Foundation has surrounded itself with renowned experts in the field of environmental sustainability, to help guide its strategic development.</p>
              )}
              color = {{
                title: "#16172C",
                desc: "#17152B"
              }}
            >
              {isMobile
                ? <h1>The Earth Foundation Advisors</h1>
                : <h1>The Earth<br /> Foundation<br /> Advisors</h1>
              }
            </TitleDesc>
            {isModalOpened && (
              <PersonModal
                person={active}
                onCloseClick={() => openModal(false)}
                onNextClick={() => onIndex(index === existingPeople.length - 1 ? 0 : index + 1)}
                onBackClick={() => onIndex(index === 0 ? existingPeople.length - 1 : index - 1)}
              />
            )}
            <div className = {styles.cards}>
              {advisors.map((adviser, i) => (
                <div className = {styles.card} onClick = {isMobile ? () => handleOnPersonClick(i) : onIndex.bind(this, i)}>
                  <div className = {styles.photo} style={{ backgroundImage: `url(${adviser.avatar})` }} />
                  <h4 className={styles.title}>{adviser.name}</h4>
                  {/*<h6 className={styles.position}>Position Here</h6>*/}
                  <p className={styles.description}>
                    {adviser.paragraphs.map((para, i) => (
                        <span key={i}>{para}</span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </div>
        <Subscribe />
        </Layout>
      </>
    );
};

export default Advisors;

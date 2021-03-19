
import Layout from "../components/Layout";
import TitleDesc from "components/TitleDesc";

import styles from "../styles/advisers.module.scss";
import Subscribe from "../components/Subscribe";
import React, {useState} from 'react';
import SlideSection from 'components/SlideSection';
import SlideSocials from 'components/SlideSocials';
import {useMediaQuery} from 'react-responsive';
import PersonModal from 'components/PersonModal';

const advisers = [
  {
    avatar: "/images/mario/avatar.jpg",
    image: "/images/mario/portrait.jpg",
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
      "Trained as a geologist, Philippe Gillet is genuinely passionate by the Earth and the Solar system from its origin to its current functioning. He was the Director of the CNRS Institut National des Sciences de l’Univers (France), involved in research projects aimed at responding to today’s major scientific and global challenges, such as the effects of climate change, sustainable development solutions or the evaluation of renewable energies.Gillet chairs the Scientific Advisory Board of INRAE (France), the world's number one institute for research on agriculture, food, and the environment. He is a prolific scientific author, with over 200 publications."
    ],
  },
];

const Advisers = () => {
    const isMobile = useMediaQuery({
      query: `(max-width: 600px)`,
    });
    let [index, onIndex] = useState(0);
    let [isModalOpened, openModal] = useState(false);
    let active = advisers[index];
    const existingPeople = advisers.filter(person => !person.isUnknown);

    const handleOnPersonClick = index => {
      onIndex(index);
      if (isMobile && !isModalOpened) {
        openModal(true);
      }
    }

    return (
        <Layout
          title = "The Earth Foundation Advisers"
          background = "whitesmoke"
          header
          footer
        >
          <SlideSection height={30} name="The Earth Foundation Advisors" color="#CEAA7A" />
          <SlideSocials color="#CEAA7A" style={{ top: '220px' }} />
          <div className = {styles.container}>
            <TitleDesc
              paragraphs = {[
                "The Earth Foundation’s mission is to inspire, educate, mentor, and empower youth to accelerate positive change towards environmental sustainability. In achieving this mission, The Earth Foundation has surrounded itself with renowned experts in the field of environmental sustainability, to help guide its strategic development."
              ]}
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
              {advisers.map((adviser, i) => (
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
    );
};

export default Advisers;

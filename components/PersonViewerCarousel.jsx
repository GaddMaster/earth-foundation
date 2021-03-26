
import {useEffect, useState} from "react";

import ButtonBase from "@material-ui/core/ButtonBase";

import styles from "../styles/person.viewer.carousel.module.scss";
import "react-multi-carousel/lib/styles.css";
import {useMediaQuery} from 'react-responsive';
import PersonModal from 'components/PersonModal';

const PersonViewerCarousel = props => {
    let [index, onIndex] = useState(0);
    let [isModalOpened, openModal] = useState(false);
    const isMobile = useMediaQuery({
        query: `(max-width: 600px)`,
    });
    let active = props.items[index];
    const existingPeople = props.items.filter(person => !person.isUnknown);

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
        <div className = {styles.container}>
            <div className = {styles.spacing}>
                <div className = {styles.top}>
                    <div className = {styles.header}>
                        <div className = {styles.label}>
                            <h1 style={{ color: props.theme.title }}>{props.title}</h1>
                        </div>
                        {!isMobile && <div className = {styles.line} />}
                    </div>
                    {isMobile
                      ? (
                        <>
                            {isModalOpened && (
                              <PersonModal
                                person={active}
                                onCloseClick={() => openModal(false)}
                                onNextClick={() => onIndex(index === existingPeople.length - 1 ? 0 : index + 1)}
                                onBackClick={() => onIndex(index === 0 ? existingPeople.length - 1 : index - 1)}
                              />
                            )}
                        </>
                      ) : (
                        <div className = {styles.summary}>
                            <div className = {styles.header}>
                                <span>{active.name}</span>
                            </div>
                            <div
                              className = {styles.position}>
                                <span>{active.position}</span>
                            </div>
                            {active.paragraphs.map((para, i) => (
                              <div
                                className = {styles.paragraph}
                                key = {i}>
                                  <span>{para}</span>
                              </div>
                            ))}
                        </div>
                     )
                    }
                </div>
                <div className = {styles.avatars}>
                    {props.items.map((person, i) => (
                      <div className = {styles.avatar} key = {i}>
                          {person.isUnknown
                            ? (
                              <ButtonBase
                                className = {styles.unknown}
                                disabled
                                key = {i}>
                                  To be announced
                              </ButtonBase>
                            )
                            : (
                              <ButtonBase
                                className = {`${styles.button} ${(index === i && !isMobile) ? styles.true : ""}`}
                                onClick = {isMobile ? () => handleOnPersonClick(i) : onIndex.bind(this, i)}
                                key = {i}>
                                  <img src = {person.avatar} />
                              </ButtonBase>
                            )
                          }
                          {isMobile && (
                              <div className = {styles.name}>
                                  <span>{person.name}</span>
                              </div>
                          )}
                      </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PersonViewerCarousel;
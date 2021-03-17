
import {useState} from "react";

import ButtonBase from "@material-ui/core/ButtonBase";

import PersonModal from "components/PersonModal";

import styles from "../styles/person.viewer.module.scss";
import {useMediaQuery} from 'react-responsive';

const PersonViewer = props => {
    let [index, onIndex] = useState(0);
    let [isModalOpened, openModal] = useState(false);
    let active = props.items[index];
    const isMobile = useMediaQuery({
        query: `(max-width: 600px)`,
    });

    const handleOnPersonClick = index => {
        onIndex(index);
        if (isMobile && !isModalOpened) {
            openModal(true);
        }
    }

    return (
        <div className = {styles.container}>
            <div className = {styles.spacing}>
                <div className = {styles.title} style = {{color:props.theme.title}}>
                    <div className = {styles.capper}>
                        <span>{props.title || "The Earth Foundation"}</span>
                    </div>
                </div>
                {isMobile
                    ? (
                      <>
                        <div className = {styles.avatars}>
                            {props.items.map((person, i) => (
                              <div className = {styles.avatar} key = {i}>
                                  <ButtonBase
                                    className = {styles.button}
                                    onClick = {() => handleOnPersonClick(i)}
                                  >
                                      <img src = {person.avatar} />
                                  </ButtonBase>
                                  <div className = {styles.name}>
                                      <span>{person.name}</span>
                                  </div>
                              </div>
                            ))}
                        </div>
                      {isModalOpened && (
                        <PersonModal
                          person={active}
                          onCloseClick={() => openModal(false)}
                          onNextClick={() => onIndex(index === props.items.length - 1 ? 0 : index + 1)}
                          onBackClick={() => onIndex(index === 0 ? props.items.length - 1 : index - 1)}
                        />
                      )}
                    </>
                  )
                  : (
                    <>
                        <div className = {styles.avatars}>
                            {props.items.map((person, i) => (
                              <div className = {styles.avatar} key = {i}>
                                  <ButtonBase
                                    className = {`${styles.button} ${index === i ? styles.true : ""}`}
                                    onClick = {onIndex.bind(this, i)}
                                    key = {i}>
                                      <img src = {person.avatar} />
                                  </ButtonBase>
                                  <div className = {styles.name}>
                                      <span>{person.name}</span>
                                  </div>
                              </div>
                            ))}
                        </div>
                        <div className = {`${styles.block} ${styles[props.stripped]}`}>
                            <div
                              className = {styles.details}
                              style = {{background:props.theme.background}}>
                                <div className = {styles.header} style = {{color:props.theme.header}}>
                                    <span>{active.name}</span>
                                </div>
                                <div
                                  className = {styles.position}
                                  style = {{color:props.theme.position}}>
                                    <span>{active.position}</span>
                                </div>
                                <div className = {styles.break} />
                                {active.paragraphs.map((para, i) => (
                                  <div
                                    className = {styles.paragraph}
                                    style = {{color:props.theme.paragraph}}
                                    key = {i}>
                                      <span>{para}</span>
                                  </div>
                                ))}
                            </div>
                            <div className = {styles.portrait}>
                                <div className = {styles.image}>
                                    <img src = {active.image} />
                                </div>
                                <div className = {styles.blue} style = {{background:props.theme.background}} />
                                <div className = {styles.white} />
                            </div>
                        </div>
                    </>
                  )
                }
            </div>
        </div>
    );
};

export default PersonViewer;

import { useState } from "react";

import ButtonBase from "@material-ui/core/ButtonBase";

import styles from "../styles/person.viewer.carousel.module.scss";
import "react-multi-carousel/lib/styles.css";
import {useMediaQuery} from 'react-responsive';

const PersonViewerCarousel = props => {
    let [index, onIndex] = useState(0);
    const isMobile = useMediaQuery({
        query: `(max-width: 600px)`,
    });
    let active = props.items[index];
    return (
        <div className = {styles.container}>
            <div className = {styles.spacing}>
                <div className = {styles.top}>
                    <div className = {styles.header}>
                        <div className = {styles.label}>
                            {isMobile
                              ? (
                                <h1>Adjudication Panel</h1>
                              ) : (
                                <h1>The Adjudicating Panel</h1>
                              )
                            }
                        </div>
                        {!isMobile && <div className = {styles.line} />}
                    </div>
                    {!isMobile && (
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
                    )}
                </div>
                <div className = {styles.avatars}>
                    {props.items.map((person, i) => (
                      <div className = {styles.avatar} key = {i}>
                          <ButtonBase
                            className = {`${styles.button} ${index === i ? styles.true : ""}`}
                            onClick = {onIndex.bind(this, i)}
                            key = {i}>
                              <img src = {person.avatar} />
                          </ButtonBase>
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
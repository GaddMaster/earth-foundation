import ButtonBase from "@material-ui/core/ButtonBase";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/person.modal.module.scss";

const PersonModal = props => {
    return (
      <div className = {styles.overlay}>
          <div className = {styles.scroll}>
              <div className = {styles.block}>
                  <div className = {styles.details}>
                      <ButtonBase
                        className = {styles.close}
                        onClick = {props.onCloseClick}>
                          X
                      </ButtonBase>
                      <div className = {styles.image}>
                          <img src = {props.person.avatar} />
                      </div>
                      <div className = {styles.header}>
                          <span>{props.person.name}</span>
                      </div>
                      <div
                        className = {styles.position}>
                          <span>{props.person.position}</span>
                      </div>
                      {props.person.paragraphs.map((para, i) => (
                        <div
                          className = {styles.paragraph}
                          key = {i}>
                            <span>{para}</span>
                        </div>
                      ))}
                      <div className = {styles.buttons}>
                          <ButtonBase
                            className = {styles.button}
                            onClick = {props.onBackClick}>
                              <FontAwesomeIcon icon = {faArrowLeft} />
                          </ButtonBase>
                          <ButtonBase
                            className = {styles.button}
                            onClick = {props.onNextClick}>
                              <FontAwesomeIcon icon = {faArrowRight} />
                          </ButtonBase>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
};

export default PersonModal;
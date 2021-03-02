
import { useState } from "react";

import ButtonBase from "@material-ui/core/ButtonBase";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import Carousel from "react-multi-carousel";

import styles from "../styles/person.viewer.carousel.module.scss";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
        partialVisibilityGutter: 40
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4.5,
        partialVisibilityGutter: 30
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4,
        partialVisibilityGutter: 20
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 3.5,
        partialVisibilityGutter: 10
    }
};

const PersonViewerCarousel = props => {
    let [index, onIndex] = useState(0);
    let active = props.items[index];
    return (
        <div className = {styles.container}>
            <div className = {styles.spacing}>
                <div className = {styles.title} style = {{color:props.theme.title}}>
                    <span>{props.title || "The Earth Foundation"}</span>
                </div>
                <div className = {styles.avatars}>
                    <Carousel 
                        arrows = {false}
                        containerClass = {styles.list}
                        responsive = {responsive}>
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
                    </Carousel>
                </div>
                <div className = {styles.block}>
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
                        <div className = {styles.break}></div>
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
                        <div className = {styles.buttons}>
                            <ButtonBase 
                                className = {`${styles.button} ${styles.first}`}
                                onClick = {onIndex.bind(this, index < 2 ? index + 1 : 2)}>
                                <FontAwesomeIcon icon = {faArrowRight} />
                            </ButtonBase>
                            <ButtonBase 
                                className = {styles.button}
                                onClick = {onIndex.bind(this, index > 0 ? index - 1 : 0)}>
                                <FontAwesomeIcon icon = {faArrowLeft} />
                            </ButtonBase>
                        </div>
                        <div className = {styles.blue} style = {{background:props.theme.background}}></div>
                        <div className = {styles.white}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonViewerCarousel;
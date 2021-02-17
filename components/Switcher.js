
import { useState } from "react";

import ButtonBase from "@material-ui/core/ButtonBase";

import Carousel from "react-multi-carousel";

import adjudication from "../assets/adjudication";

import styles from "../styles/switcher.module.scss";

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 10
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 10
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 10
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 3.5
    }
}; 

const Switcher = props => {
    let [index, setIndex] = useState(0);
    return (
        <div className = {styles.switcher}>
            <div className = {styles.control}>
                <div className = {styles.label}>
                    <span>Adjudication Panel</span>
                </div>
                <div className = {styles.swiper}>
                    <Carousel 
                        showDots = {false}
                        arrows = {false}
                        containerClass = {styles.con}
                        itemClass = {styles.item}
                        responsive = {responsive}>
                        {adjudication.map((item, i) => (
                            <ButtonBase 
                                className = {`${styles.avatar} ${index === i ? styles.true : ""}`}
                                onClick = {setIndex.bind(this, i)}
                                key = {i}>
                                <img src = {item.avatar} />
                            </ButtonBase>
                        ))}
                    </Carousel>
                </div>
            </div>
            <div className = {styles.panel_board}>
                <div className = {styles.details}>
                    <div className = {styles.header}>
                        <span>{adjudication[index].first} {adjudication[index].last}</span>
                    </div>
                    <div className = {styles.op}>
                        <span>{adjudication[index].position}</span>
                    </div>
                    <div className = {styles.br}></div>
                    <div className = {styles.summary}>
                        <span>{adjudication[index].summary}</span>
                    </div>
                    <div className = {styles.description}>
                        <span>{adjudication[index].description}</span>
                    </div>
                    <div className = {styles.bar}></div>
                </div>
                <div className = {styles.portrait}>
                    <div className = {styles.image}>
                        <img src = {adjudication[index].image} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Switcher;
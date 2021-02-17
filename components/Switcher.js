
import { useState } from "react";
import Carousel from "react-multi-carousel";
import ButtonBase from "@material-ui/core/ButtonBase";

import "react-multi-carousel/lib/styles.css";

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
    
    const title = props.title;
    const data = props.data;

    return (
        <div className = {styles.switcher}>
            <div className = {styles.control}>
                <div className = {styles.label}>
                    <span>{title}</span>
                </div>
                <div className = {styles.swiper}>
                    <Carousel 
                        showDots = {false}
                        arrows = {false}
                        containerClass = {styles.con}
                        itemClass = {styles.item}
                        responsive = {responsive}>
                        {data.map((item, i) => (
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
                        <span>{data[index].first} {data[index].last}</span>
                    </div>
                    <div className = {styles.op}>
                        <span>{data[index].position}</span>
                    </div>
                    <div className = {styles.br}></div>
                    <div className = {styles.summary}>
                        <span>{data[index].summary}</span>
                    </div>
                    <div className = {styles.description}>
                        <span>{data[index].description}</span>
                    </div>
                    <div className = {styles.bar}></div>
                </div>
                <div className = {styles.portrait}>
                    <div className = {styles.image}>
                        <img src = {data[index].image} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Switcher;
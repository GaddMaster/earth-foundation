
import Carousel from "react-multi-carousel";
import Card from "./Card";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle as solid, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faCircle as hollow } from "@fortawesome/free-regular-svg-icons";

import styles from "../styles/slider.module.scss";
import "react-multi-carousel/lib/styles.css";

import content from "../assets/home";

const Slider = props => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4.8,
            partialVisibilityGutter: 40
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2.8,
            partialVisibilityGutter: 30
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1.8,
            partialVisibilityGutter: 20
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 10
        }
    };
    return (
        <Carousel 
            additionalTransfrom={0}
            centerMode = {false}
            swipeable
            dragable
            ssr
            arrows = {false}
            minimumTouchDrag = {0}
            responsive = {responsive}>
            {content.home.concat(content.home).map((item, index) => (
                <div
                    className = {styles.wrapper}
                    key = {index}>
                    <Card
                        image = {item.image}
                        label = {item.label} />
                </div>
            ))}
        </Carousel>
    );
};

export default Slider;
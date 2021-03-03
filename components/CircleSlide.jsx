
import styles from "styles/circle.slide.module.scss";

const CircleSlide = props => {
    return (
        <div className = {styles.container}>
            <div className = {styles.paragraph}>
                <div className = {styles.padding}>
                    <span>{props.paragraph}</span>
                </div>
            </div>
            <div className = {styles.image}>
                <img src = {props.image} alt = "" />
            </div>
            {/*<div className = {styles.overlay}>
                <img src = "/images/circle-overlap.png" />     
            </div>*/}
        </div>
    );
};

export default CircleSlide;
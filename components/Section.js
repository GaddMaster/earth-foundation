
// NEXT JS
import Link from "next/link";

import styles from "../styles/section.module.scss";

const Section = props => {
    return (
        <section className = {styles.section}>
            <div 
                className = {styles.cover} 
                style = {{ background: `linear-gradient(to bottom, rgb(255 255 255 / 0%) 20%, black), url(${props.cover})` }}>
                <div className = {styles.wrapper}>
                    <div className = {styles.title}>
                        <h1 style = {{margin:"0px 0px 40px 0px"}}>{props.title}</h1>
                    </div>
                    <div className = {styles.subtitle}>
                        <h2>{props.subtitle}</h2>
                    </div>
                    <div className = {styles.summary}>
                        {props.paragraphs.map((paragraph, index) => (
                            <p 
                            style = {{margin:`0px 0px ${index < props.paragraphs.length - 1 ? "40px" : "0px"} 0px`}}
                            key = {index}>{paragraph}</p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section;
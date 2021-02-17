
import styles from "../styles/content.section.module.scss";

const ContentSection = props => {
    return (
        <section className = {styles.section}>
            <div className = {styles.cover} >
                <div className = {styles.wrapper}>
                    <div className = {styles.summary}>
                        {props.paragraphs.map((paragraph, index) => <p key = {index}>{paragraph}</p>)}
                    </div>
                    <div className = {styles.image}>
                        <img src={props.image} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContentSection;
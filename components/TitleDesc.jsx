
import PropTypes from "prop-types";

import styles from "styles/title.description.module.scss";

const TitleDesc = props => {
    return (
        <div className = {styles.container}>
            <div className = {styles.padding}>
                <div className = {styles.title}>
                    {props.children}
                </div>
                <div className = {styles.divider}></div>
                <div className = {styles.paragraphs} style = {{color:props.color.desc}}>
                    {props.paragraphs.map((paragrpah, index) => 
                        <div 
                            className = {styles.paragraph} 
                            style = {{
                                marginBottom: index < props.paragraphs.length - 1 ? 20 : 0
                            }}
                            key = {index}>
                            <span>{paragrpah}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

TitleDesc.propTypes = {
    title: PropTypes.string,
    html: PropTypes.bool,
    desc: PropTypes.array,
    color: PropTypes.object 
};

TitleDesc.defaultProps = {
    title: "Lorem Ipsum is simply dummy text",
    html: false,
    paragraphs: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    ],
    color: {
        title: "black",
        desc: "black"
    }
};

export default TitleDesc;
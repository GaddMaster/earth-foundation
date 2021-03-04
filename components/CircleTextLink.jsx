
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import styles from "styles/circle.text.link.module.scss";
import misc from "utils/misc";

const CircleTextLink = props => {
    let { text, link, radius, onClick } = props;
    let myArr = text.split("");
    let percent = 300 / myArr.length;
    let offset = 110;
    let diamter = radius * 2;
    return (
        <div className = {styles.container} style = {{justifyContent:props.justify}}>
            <div 
                className = {styles.circle}
                style = {{
                    width: 0,
                    height: diamter
                }}> 
                {myArr.map((c, i) => {
                    let p = (percent * (i+1)) + offset;
                    return (
                        <div 
                            className = {styles.character}
                            style = {{
                                transform: `rotate(${p}deg)`
                            }}
                            key = {i}>
                            <div className = {styles.marker}>
                                <span>{c}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className = {styles.link}>
                <span>{link}</span>
                <FontAwesomeIcon icon = {faArrowRight} />
            </div>
        </div>
    );
};

CircleTextLink.propTypes = {
    text: PropTypes.string,
    link: PropTypes.string,
    radius: PropTypes.number,
    onClick: PropTypes.func
};

CircleTextLink.defaultProps = {
    text: "The Earth Foundation",
    link: "Learn More",
    radius: 100,
    onClick: misc.noop
};

export default CircleTextLink;

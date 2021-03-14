
import shared from "styles/point.blurp.shared.module.scss";
import left from "styles/point.blurp.left.module.scss";
import right from "styles/point.blurp.right.module.scss";
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useState} from 'react';
import {useMediaQuery} from 'react-responsive';

const PointBlurp = props => {
  const isMobile = useMediaQuery({
    query: `(max-width: 600px)`,
  });
  const [isPointOpened, openPoint] = useState(!isMobile);
    let styles = props.lean === "left" ? left : right;
    return (
        <div className = {styles.container} onClick={() => isMobile && openPoint(!isPointOpened)}>
            {props.image &&
                <div className = {styles.image}>
                    <img src = {props.image} />
                </div> }
            <div className = {styles.point}>
                <div className = {styles.circle}></div>
                <div className = {styles.line}></div>
                <div className = {styles.dot}></div>
            </div>
          <div className = {styles.title}>
            {isMobile && <span>{isPointOpened ? '-' : '+'}</span>}
            <span>{props.title}</span>
            </div>
            {isPointOpened && (
              <div className = {styles.desc}>
                <span>{props.desc}</span>
              </div>
            )}
        </div>
    );
};

export default PointBlurp;
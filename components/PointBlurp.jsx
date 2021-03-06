
import shared from "styles/point.blurp.shared.module.scss";
import left from "styles/point.blurp.left.module.scss";
import right from "styles/point.blurp.right.module.scss";

const PointBlurp = props => {
    let styles = props.lean === "left" ? left : right;
    return (
        <div className = {styles.container}>
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
                <span>{props.title}</span>
            </div>
            <div className = {styles.desc}>
                <span>{props.desc}</span>
            </div>
        </div>
    );
};

export default PointBlurp;
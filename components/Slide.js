
import React, { PureComponent } from "react";

import styles from "../styles/slide.module.scss";

class Slide extends PureComponent {

    constructor (props) {
        super(props);
        this.state = {};
    };

    componentDidMount = () => {};

    componentDidUpdate = () => {};
    
    render = () => {
        let actionable = this.props.actionable !== "none";
        let base = this.props.index === 0;
        let pushing = this.props.touch && this.props.push && this.props.percentage < 0;
        let pulling = this.props.touch && this.props.pull && this.props.percentage > 0;
        return (
            <div 
                className = {styles.slide}
                style = {{
                    background: this.props.background,
                    transition: this.props.touch ? "top 0.1s" : "top 0.5s",
                    top: pushing ? `${this.props.percentage*-1}vh` : pulling ? `${100-this.props.percentage}vh` : this.props.index <= this.props.current ? "0vh" : "100vh",
                    zIndex: this.props.index
                }}>
                {this.props.children}
            </div>
        );
    };

};

export default Slide;
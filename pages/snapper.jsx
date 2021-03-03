
import React from "react";
import ReactDOM from "react-dom";
import ScrollSnap from "scroll-snap";
import styles from "styles/snapper.module.css";

const callback = () => console.log("snapped");

class Snapper extends React.Component {

    container = React.createRef();

    bindScrollSnap() {
        const element = this.container.current
        const snapElement = new ScrollSnap(element, { snapDestinationY: "100vh" });
        snapElement.bind(callback)
    };

    componentDidMount = () => this.bindScrollSnap();

    render() {
        return (
        <div 
            id = "container" 
            className = {styles.container}
            ref = {this.container}>
            <div className = {styles.page} style = {{background:"whitesmoke"}}>
                <div>I</div>
            </div>
            <div className = {styles.page} style = {{background:"#e8e7e7"}}>
                <div>II</div>
            </div>
            <div className = {styles.page} style = {{background:"#cecece"}}>
                <div>III</div>
            </div>
            <div className = {styles.page} style = {{background:"#b5b5b5"}}>
                <div>IV</div>
            </div>
        </div>
        );
    };

};

export default Snapper;
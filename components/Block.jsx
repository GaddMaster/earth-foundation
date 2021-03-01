
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle as solid, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faCircle as hollow } from "@fortawesome/free-regular-svg-icons";

import styles from "styles/board.module.scss";

const Board = props => {
    let { item, index } = props;
    return (
        <div c
            className = {styles.board} 
            style = {{
                marginTop: index === 0 ? 80 : 0
            }}
            key = {index}>
            <div className = {styles.banner} style = {{background:`url(${item.image})`}}></div>
            <div className = {styles.block} style = {{background:item.background||"white"}}>
                <div className = {styles.padding}>
                    <div className = {styles.pagination}>
                        <div className = {styles.index}>
                            <span>0{index+1}</span>
                        </div>
                        <div className = {styles.count}>
                            <span>04</span>
                        </div>
                        <div className = {styles.dots}>
                            <FontAwesomeIcon icon = {index===0?solid:hollow} className = {styles.dot} />
                            <FontAwesomeIcon icon = {index===1?solid:hollow} className = {styles.dot} />
                            <FontAwesomeIcon icon = {index===2?solid:hollow} className = {styles.dot} />
                            <FontAwesomeIcon icon = {index===3?solid:hollow} className = {styles.dot} />
                        </div>
                    </div>
                    <div className = {styles.label}>
                        <h1>{item.label}</h1>
                    </div>
                    <div className = {styles.summary}>
                        <p>{item.summary}</p>
                    </div>
                    <div className = {styles.route}>
                        <span>Read More</span>
                        <FontAwesomeIcon icon = {faArrowRight} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Board;
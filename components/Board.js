
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle as solid, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faCircle as hollow } from "@fortawesome/free-regular-svg-icons";

import styles from "../styles/board.module.scss";

const Board = props => {
  return (
    <section className = {styles.board}>
      <div className = {styles.banner} style = {{background:`url(${props.image})`}}></div>
      <div className = {styles.block} style = {{background:props.background||"black"}}>
        <div className = {styles.pagination}>
          <div className = {styles.index}>
            <span>0{props.index+1}</span>
          </div>
          <div className = {styles.count}>
            <span>04</span>
          </div>
          <div className = {styles.dots}>
            {[0,1,2,3].map((number, index) => <FontAwesomeIcon icon = {index === props.index ? solid : hollow} className = {styles.dot} key = {index} />)}
          </div>
        </div>
        <div className = {styles.label}>
          <h1>{props.label}</h1>
        </div>
        <div className = {styles.summary}>
          <p>{props.summary}</p>
        </div>
        <div className = {styles.route}>
          <span>Read More About The Initiate</span>
          <FontAwesomeIcon icon = {faArrowRight} />
        </div>
      </div>
    </section>
  );
};

export default Board;
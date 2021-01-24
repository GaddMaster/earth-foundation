

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
            {[0,1,2,3].map((number, index) => <span>O</span>)}
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
          0
        </div>
      </div>
    </section>
  );
};

export default Board;

import Header from "./Header";

import styles from "styles/cover.module.scss";

const Cover = props => {
    return (
        <div className = {styles.cover} style = {{backgroundImage:`${props.cover.image}`}}>
            <div className = {styles.wrapper}>
              <div className = {styles.title}>
                <h1>{props.cover.title}<br />{props.cover.title_2}<br />{props.cover.title_3}</h1>
              </div>
              {props.cover.sub && (
                <div className = {styles.sub}>
                  <h2>{props.cover.sub}</h2>
                </div>
              )}
              {props.cover.paragraphs.map((para, index) => {
                return (
                  <div
                    className = {styles.para}
                    style = {{marginBottom:20}}
                    key = {index}>
                    <span>{para}</span>
                  </div>
                );
              })}
            </div>
        </div>
    );
};

export default Cover;
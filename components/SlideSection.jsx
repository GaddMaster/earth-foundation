
import styles from "../styles/slide.section.module.scss";

const SlideSection = ({ name, color }) => (
  <div
    className = {styles.section}
  >
    <div className = {styles.line} style = {{ backgroundColor: color }} />
    <span className = {styles.name} style = {{ color: color }}>{name}</span>
  </div>
);

export default SlideSection;

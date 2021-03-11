
import styles from "../styles/slide.section.module.scss";

const SlideSection = ({ name, color, height, style }) => (
  <div
    className = {styles.section}
    style = {{
      maxHeight: `${height}vh`,
    }}
  >
    <span className = {styles.name} style = {{ color: color }}>{name}</span>
    <div className = {styles.line} style = {{ backgroundColor: color }} />
  </div>
);

export default SlideSection;


import styles from "../styles/textarea.module.scss";

const Textarea = ({ label, value, name, placeholder, id, onChange }) => (
  <div
    className = {styles.wrapper}
  >
    {label && (
      <label htmlFor={id}>{label}</label>
    )}
    <textarea
      value={value}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
);

export default Textarea;

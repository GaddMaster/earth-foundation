
import styles from "../styles/input.module.scss";

const Input = ({ label, value, name, placeholder, id, onChange }) => (
  <div
    className = {styles.wrapper}
  >
    {label && (
      <label htmlFor={id}>{label}</label>
    )}
    <input
      type="text"
      value={value}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
);

export default Input;

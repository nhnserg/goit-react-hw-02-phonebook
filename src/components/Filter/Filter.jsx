import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label className={styles.filter}>
    Filter by name:
    <input
      type="text"
      value={value}
      onChange={onChange}
      className={styles.input}
    />
  </label>
);

export default Filter;

import { Component } from 'react';
import styles from './Filter.module.css';

class Filter extends Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label className={styles.label}>
        Filter contacts:
        <input
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
          className={styles.input}
        />
      </label>
    );
  }
}

export default Filter;

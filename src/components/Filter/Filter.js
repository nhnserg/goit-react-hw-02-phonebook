import { Component } from 'react';
import styles from './Filter.module.css';

class Filter extends Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label className={styles.label}>
        <input
          type="text"
          placeholder="Filter contacts:"
          value={value}
          onChange={e => onChange(e.target.value)}
          className={styles.input}
        />
      </label>
    );
  }
}

export default Filter;

import { Component } from 'react';
import styles from './ContactItem.module.css';

class ContactItem extends Component {
  render() {
    const { contact, onDelete } = this.props;

    return (
      <li className={styles.item}>
        {contact.name}: {contact.number}
        <button
          onClick={() => onDelete(contact.id)}
          className={styles.deletebutton}
        >
          Delete
        </button>
      </li>
    );
  }
}
export default ContactItem;

import { Component } from 'react';
import styles from './ContactList.module.css';
import ContactItem from 'components/ContactItem/ContactItem';

class ContactList extends Component {
  render() {
    const { contacts, onDelete } = this.props;
    return (
      <ul className={styles.list}>
        {contacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} onDelete={onDelete} />
        ))}
      </ul>
    );
  }
}

export default ContactList;

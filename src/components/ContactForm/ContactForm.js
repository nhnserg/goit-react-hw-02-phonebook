import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';
const { Component } = require('react');

class ContactForm extends Component {
  state = {
    name: '',
    Number: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;
    const { contacts, addContact } = this.props;

    const isNameUnique = !contacts.some(contact => contact.name === name);

    if (!isNameUnique) {
      alert('This name is already in contacts');
      return;
    }
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    addContact(newContact);

    this.setState({ name: '', number: '' });
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { name, number } = this.state;
    return (
      <form className={StyleSheet.form} onSubmit={this.handleSubmit}>
        <label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -]?[a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces."
            required
            placeholder="Name:"
            value={name}
            onChange={this.handleChange}
            className={styles.input}
          />
        </label>
        <label>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title=" Phone number must be digits and can contain spaces,dashes, parentheses and can start with +"
            required
            placeholder="Number:"
            value={number}
            onChange={this.handleChange}
            className={styles.input}
          />
        </label>
        <button type="submit" className={styles.button}>
          Add Contact
        </button>
      </form>
    );
  }
}

export default ContactForm;

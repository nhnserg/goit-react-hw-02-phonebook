import { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import styles from './App.module.css';
import Filter from "./Filter/Filter";



export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, number, contacts } = this.state;

    if (name.trim() === '' || number.trim() === '') {
      alert('Name and number are required!');
      return;
    }

    const isNameUnique = !contacts.some((contact) => contact.name === name);

    if (isNameUnique) {
      const newContact = {
        id: uuidv4(),
        name,
        number,
      };

      this.setState((prevState) => ({
        contacts: [...prevState.contacts, newContact],
        name: '',
        number: '',
      }));
    } else {
      alert('This name is already in contacts');
    }
  };

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value });
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    const { name, number, contacts, filter } = this.state;

    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm
          name={name}
          number={number}
          onChange={this.handleChange}
          onSubmit={(event) => this.handleSubmit(event)}
        />
        <h2 className={styles.subtitle}>Contacts</h2>
        <Filter value={filter} onChange={this.handleFilterChange} />
        <ContactList
          contacts={contacts}
          filter={filter}
          onDelete={this.deleteContact}
        />
      </div>
    );
  }
}


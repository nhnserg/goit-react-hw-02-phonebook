import { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import styles from './App.module.css';



export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = (newContact) => {
    const isNameUnique = !this.state.contacts.some((contact) => contact.name === newContact.name);

    if (isNameUnique) {
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, newContact],
      }));
    } else {
      alert('This name is already in contacts');
    }
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  handleFilterChange = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2 className={styles.subtitle}>Contacts</h2>
        <Filter value={filter} onChange={this.handleFilterChange} />
        <ContactList contacts={filteredContacts} onDelete={this.deleteContact} />
      </div>
    );
  }
}

// App.js
import React, { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import styles from "./App.module.css";

export class App extends Component {
  // Состояние для управления списком контактов и вводом фильтра
  state = {
    contacts: [],
    filter: "",
  };
  // Обрабатывает изменения ввода фильтра
  handleFilterChange = (e) => {
    this.setState({ filter: e.target.value });
  };
  // Обрабатывает отправку формы для добавления нового контакта
  handleSubmit = (newContact) => {
    const { contacts } = this.state;

    // Проверяет, существует ли контакт с таким же именем
    if (contacts.some((contact) => contact.name.toLowerCase() === newContact.name.toLowerCase())) {
      alert(`Contact with name "${newContact.name}" already exists!`);
      return;
    }
    // Добавляет новый контакт в состояние
    this.setState((prevState) => ({ contacts: [...prevState.contacts, newContact] }));
  };
  // Обрабатывает удаление контакта
  handleDeleteContact = (id) => {
    // Фильтрует контакт с указанным идентификатором
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    // Фильтрует контакты на основе введенного фильтра
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    // Рендерит основной интерфейс приложения
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} />
        <h2 className={styles.subtitle}>Contacts</h2>
        <input
          type="text"
          placeholder="Search contacts"
          value={filter}
          onChange={this.handleFilterChange}
          className={styles.input}
        />
        <ContactList contacts={filteredContacts} onDeleteContact={this.handleDeleteContact} />
      </div>
    );
  }
}

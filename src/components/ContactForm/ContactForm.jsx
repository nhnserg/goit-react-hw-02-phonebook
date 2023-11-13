import styles from './ContactForm.module.css';
import { nanoid } from 'nanoid';
const { Component } = require('react');

class ContactForm extends Component {
  // Начальное состояние компонента, хранящее введенное имя и номер
  state = {
    name: '',
    number: '',
  };

  // Обрабатывает изменения ввода имени
  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  // Обрабатывает изменения ввода номера
  handleNumberChange = (e) => {
    this.setState({ number: e.target.value });
  };

  // Обрабатывает отправку формы для добавления нового контакта
  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;

    // Проверяет, введены ли имя и номер
    if (!name || !number) {
      alert('Пожалуйста, введите и имя, и номер.');
      return;
    }

    // Вызывает функцию onSubmit из родительского компонента, передавая новый контакт
    this.props.onSubmit({ id: nanoid(), name, number });
    // Сбрасывает состояние в пустые значения после отправки формы
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    // Рендерит форму для ввода имени и номера
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <label>
          <input
            type="text"
            name="name"
            placeholder='Имя:'
            value={name}
            onChange={this.handleNameChange}
            className={styles.input}
          />
        </label>
        <label>
          <input
            type="tel"
            name="number"
            placeholder='Номер:'
            value={number}
            onChange={this.handleNumberChange}
            className={styles.input}
          />
        </label>
        <button type="submit" className={styles.button}>
          Добавить контакт
        </button>
      </form>
    );
  }
}

export default ContactForm;

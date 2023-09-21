import { Component } from 'react';
import css from './ContactForm.module.css';
import { formValidation, inputClean } from 'utils/formValidation.js';


class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (formValidation(form) === true) {
      this.props.handleFormSubmit(this.state);
      this.setState({ name: '', number: '' });
    }
  };

  render() {
    return (
      <form className={css.contactForm} onSubmit={this.handleSubmit} noValidate>
        <label className={css.label}>
          <span className={css.labelText}>Name</span>
          <input
          className={css.input}
          type="text"
          name="name"
          value={this.state.name}
          pattern="[^A-zА-яЁё'-\+ ()\-]"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder='Enter your name'
          onFocus={(input)=>inputClean(input.target)}
          onChange={this.handleChange}
          />
        </label>
        <label className={css.label}>
          <span className={css.labelText}>Number</span>
          <input
            className={css.input}
            type="tel"
            name="number"
            value={this.state.number}
            pattern="[^0-9\+ ()\-]"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder='Enter your phone number'
            onFocus={(input) => inputClean(input.target)}
            onChange={this.handleChange}
          />
        </label>
        <button className={css.submit}>Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
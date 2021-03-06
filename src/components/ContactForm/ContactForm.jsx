import { Component } from 'react';
import shortid from 'shortid';
import './ContactForm.module.scss';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import contactsActions from '../../redux/phonebook/contacts-operations';
import store from '../../redux/store';
import styles from './ContactForm.module.scss';
import TextField from '@material-ui/core/TextField';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { name } = this.state;
    // const contacts = store.store.getState().contacts.items;
    const contacts = store.store.getState().contacts.items;
    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    this.props.getData(this.state);
    this.props.onCloseModal();
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <TextField
          id="outlined-basic"
          label="Number"
          variant="outlined"
          type="tel"
          name="number"
          required
          value={this.state.number}
          onChange={this.handleChange}
        />
        <div className={styles.btnAdd}>
          <Button variant="contained" className="btn" type="submit">
            Add
          </Button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getData: value => dispatch(contactsActions.addContact(value)),
});

export default connect(null, mapDispatchToProps)(ContactForm);

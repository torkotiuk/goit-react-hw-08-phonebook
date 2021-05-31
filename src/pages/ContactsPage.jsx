import React, { Component } from 'react';
import { connect } from 'react-redux';
import Section from '../components/share/Section'; 
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
import Modal from '../components/Modal';
import IconButton from '../components/IconButton';
import { ReactComponent as AddIcon } from '../icons/add.svg';
import oper from '../redux/phonebook/contacts-operations';
import { getLoading } from '../redux/phonebook/contacts-selectors';

class App extends Component {
  state = {
    showModal: false,
  };

  componentDidMount() {
    this.props.fetchContacts();
  }

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  render() {
    return (
      <Section>
        <IconButton onClick={this.toggleModal} arial-label="Add contact">
          <h2>Create contact</h2>
          <AddIcon width="40" height="40" fill="green" />
        </IconButton>
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <h2 className="title_form">Create new contact</h2>
            <ContactForm onCloseModal={this.toggleModal} />
          </Modal>
        )}
        {this.props.isLoadingContacts && <h1>Loading...</h1>}
        <Filter />
        <ContactList />
      </Section>
    );
  }
}

const mapStateToProps = state => ({
  // isLoadingContacts: state.contacts.loading,
  isLoadingContacts: getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(oper.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

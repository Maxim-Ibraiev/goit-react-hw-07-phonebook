import { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/contacts/contactsOperations';
import { getLoading } from '../../redux/contacts/contacts-selectors';
import { getFilter, getItems } from '../../redux/contacts/contacts-selectors';
import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import Filter from '../../components/Filter';
import Logo from '../../components/Logo';
import s from './PhonebookPage.module.scss';
import { TIMEOUT_LONGER } from '../../const';

class PhonebookPage extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { contacts, loading } = this.props;

    return (
      <div className={s.container}>
        <Logo appear timeout={TIMEOUT_LONGER} />

        <ContactForm />

        <h2>Contacts</h2>
        {contacts.length > 0 && <Filter isShow={contacts.length > 1} />}

        {loading ? <p>Loading...</p> : <ContactList />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: getItems(state),
  filter: getFilter(state),
  loading: getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  onSetContacts: arr => dispatch(actions.addItem(arr)),
  fetchContacts: () => dispatch(actions.items()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhonebookPage);

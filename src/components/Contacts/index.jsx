import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/api';
import ContactsItem from 'components/Contacts/ContactsItem';
import {
  getContacts,
  getIsLoading,
  getError,
} from 'redux/contacts/contactsSelectors';
import { getFilter } from 'redux/filter/filterSelectors.js';
import Loader from 'components/Loader';
import styles from './contacts.module.css';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const filteredContacts = () => {
    const normalizedFilter = filterValue.trim().toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div className={styles.contactsList}>
      {error && <p>{error}</p>}
      {isLoading && <Loader />}
      {contacts?.length > 0 &&
        filteredContacts().map(({ id, name, phone }) => (
          <ContactsItem key={id} id={id} name={name} number={phone} />
        ))}
    </div>
  );
};

export default Contacts;

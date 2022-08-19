import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/api';
import ContactsItem from 'components/Contacts/ContactsItem';
import Loader from 'components/Loader';
import styles from './contacts.module.css';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(state => state.contacts.items);
  const filterValue = useSelector(state => state.filter.filterValue);

  const filteredContacts = () => {
    const normalizedFilter = filterValue.trim().toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div className={styles.contactsList}>
      {!contacts.length && <Loader />}
      {contacts.length > 0 &&
        filteredContacts().map(({ id, name, phone }) => (
          <ContactsItem key={id} name={name} number={phone} />
        ))}
    </div>
  );
};

export default Contacts;

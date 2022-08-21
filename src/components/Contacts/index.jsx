import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/api';
import { getFilter } from 'redux/filter/filterSelectors.js';
import ContactsItem from 'components/Contacts/ContactsItem';
import { Loader } from 'components/Loader';
import styles from './contacts.module.css';

const Contacts = () => {
  const { data: contacts, isSuccess, isLoading, error } = useGetContactsQuery();
  const filterValue = useSelector(getFilter);

  const filteredContacts = () => {
    const normalizedFilter = filterValue.trim().toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div className={styles.contactsList}>
      {error && <p>{error.data}</p>}
      {isLoading && <Loader />}
      {isSuccess &&
        filteredContacts().map(({ id, name, phone }) => (
          <ContactsItem key={id} id={id} name={name} number={phone} />
        ))}
    </div>
  );
};

export default Contacts;

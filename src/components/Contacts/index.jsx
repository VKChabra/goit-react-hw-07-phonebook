import ContactsItem from 'components/Contacts/ContactsItem';
import { useSelector } from 'react-redux';
import styles from './contacts.module.css';

const Contacts = () => {
  const contacts = undefined;
  const filterValue = useSelector(state => state.contacts.filter);

  const filteredContacts = () => {
    const normalizedFilter = filterValue.trim().toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div className={styles.contactsList}>
      {contacts &&
        filteredContacts().map(({ id, name, number }) => (
          <ContactsItem key={id} id={id} name={name} number={number} />
        ))}
    </div>
  );
};

export default Contacts;

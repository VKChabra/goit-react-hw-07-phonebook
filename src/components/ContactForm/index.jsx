import styles from './contactForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/contactsSelectors';
import { addContact } from 'redux/api';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const submitAddContact = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const phone = form.elements.phone.value;
    form.reset();

    const normalizedName = name.toLowerCase();
    const existingName = contacts.find(
      contact => contact.name.toLowerCase() === normalizedName
    );

    if (existingName) {
      return alert(`${name} is already in contacts, sorry`);
    }

    const contact = {
      name,
      phone,
    };

    dispatch(addContact(contact));
  };

  return (
    <form className={styles.contactForm} onSubmit={submitAddContact}>
      <label className={styles.formLabel}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={styles.formLabel}>
        Number
        <input
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;

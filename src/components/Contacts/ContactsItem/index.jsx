import styles from './contactsItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/api';
import PropTypes from 'prop-types';

const ContactsItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li className={styles.contactsListItem}>
      {name}: {number}
      <button
        type="button"
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Delete
      </button>
    </li>
  );
};

ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactsItem;

import { useDeleteContactMutation } from 'redux/api';
import { BtnLoader } from 'components/Loader';
import styles from './contactsItem.module.css';
import PropTypes from 'prop-types';

const ContactsItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  return (
    <li className={styles.contactsListItem}>
      {name}: {number}
      <button
        type="button"
        disabled={isLoading}
        onClick={() => {
          deleteContact(id);
        }}
      >
        {isLoading ? BtnLoader('Deleting') : 'Delete'}
      </button>
    </li>
  );
};

ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactsItem;

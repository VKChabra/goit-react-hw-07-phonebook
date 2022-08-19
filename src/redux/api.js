import {
  fetchItemsRequest,
  fetchItemsSuccess,
  fetchItemsFailure,
} from 'redux/contacts/contactsSlice.js';
import axios from 'axios';

axios.defaults.baseURL = 'https://62fcd44bb9e38585cd46d946.mockapi.io/';

export const fetchContacts = () => dispatch => {
  dispatch(fetchItemsRequest());

  axios
    .get('contacts')
    .then(data => dispatch(fetchItemsSuccess(data.data)))
    .catch(error => dispatch(fetchItemsFailure(error.message)));
};

export const addContact = contact => () => {
  axios.post('contacts', contact).catch(error => {
    console.error(error);
  });
};

export const deleteContact = id => () => {
  axios.delete(`contacts/${id}`).catch(error => {
    console.error(error);
  });
};

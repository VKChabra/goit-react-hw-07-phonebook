import axios from 'axios';
import {
  fetchItemsRequest,
  fetchItemsSuccess,
  fetchItemsFailure,
} from 'redux/contacts';

axios.defaults.baseURL = 'https://62fcd44bb9e38585cd46d946.mockapi.io/';

export const fetchContacts = () => dispatch => {
  dispatch(fetchItemsRequest());

  axios
    .get('contacts')
    .then(data => dispatch(fetchItemsSuccess(data.data)))
    .catch(error => dispatch(fetchItemsFailure(error.message)));
};

import axios from 'axios';
import {
  addItemRequest,
  addItemSuccess,
  addItemError,
  deleteRequest,
  deleteSuccess,
  deleteError,
  itemsRequest,
  itemsSuccess,
  itemsError,
} from './contactsActions';

axios.defaults.baseURL = 'http://localhost:3000';

export const items = () => dispatch => {
  dispatch(itemsRequest());

  axios('/contacts')
    .then(({ data }) => dispatch(itemsSuccess(data)))
    .catch(error => dispatch(itemsError(error)));
};

export const addItem = item => dispatch => {
  dispatch(addItemRequest());

  axios
    .post('/contacts', item)
    .then(({ data }) => dispatch(addItemSuccess(data)))
    .catch(error => dispatch(addItemError(error)));
};

export const deleteItem = id => dispatch => {
  dispatch(deleteRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(dispatch(deleteSuccess(id)))
    .catch(error => dispatch(deleteError(error)));
};

import { combineReducers } from 'redux';
import categories from './categories';
import products from './products';
import product from './product';
import addNewProductForm from './addNewProductForm';

export default combineReducers({
  categories,
  products,
  product,
  addNewProductForm,
});
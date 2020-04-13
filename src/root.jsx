import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import MyBasementRouter from './router';
import Header from './views/header';

const Root = ({ store }) => (
  <Provider store={store}>
    <Header />
    <MyBasementRouter />
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root;
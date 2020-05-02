import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addCategory, removeCategory, loadCategories } from '../action'
import CategoryList from '../views/categoryList';

const getVisibleCategories = (categories) => {
    return categories;
}

const mapStateToProps = (state) => {
  return {
    categories: getVisibleCategories(state.categories),
  }
};

const mapDispatchToProps = dispatch => ({
    addCategory: (id, qty) => dispatch(addCategory(id, qty)),
    removeCategory: (id, qty) => dispatch(removeCategory(id,qty)),
    loadCategories: (categories) => dispatch(loadCategories(categories)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryList));

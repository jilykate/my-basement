import { connect } from 'react-redux'
import { addCategory, removeCategory, loadCategories } from '../action'
import CategoryList from '../views/categoryList';

const getVisibleCategories = (categories) => {
    //TODO apply is_expired, is_deleted filter here.
    console.log(categories);
    return categories;
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    categories: getVisibleCategories(state.categories),
  }
};

const mapDispatchToProps = dispatch => ({
    addCategory: (id, qty) => dispatch(addCategory(id, qty)),
    removeCategory: (id, qty) => dispatch(removeCategory(id,qty)),
    loadCategories: (categories) => dispatch(loadCategories(categories)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryList)

import { connect } from 'react-redux'
import { 
  addProduct, 
  removeProduct, 
  deleteProduct, 
  addNewProduct 
} from '../action'
import CategoryDetail from '../views/categoryDetail';

const getVisibleProducts = (products) => {
    //TODO apply is_expired, is_deleted filter here.
    console.log('===getVisibleProducts===');
    console.log(products);
    return products;
}

const mapStateToProps = (state, ownProps) => {
  console.log('====mapStateToProps===');
  console.log(state);
  return {
    products: getVisibleProducts(state.products),
    categoryName: ownProps.categoryName,
  }
};

const mapDispatchToProps = dispatch => ({
    addProduct: (id, qty) => dispatch(addProduct(id, qty)),
    removeProduct: (id, qty) => dispatch(removeProduct(id,qty)),
    deleteProduct: (id) => dispatch(deleteProduct(id)),
    addNewProduct: (name) => dispatch(addNewProduct(name)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryDetail)

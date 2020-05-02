import { connect } from 'react-redux';
import * as LocalDB from '../database/localDB';
import { 
  editProductQty,
  deleteProduct, 
  loadProducts,
} from '../action'
import CategoryDetail from '../views/categoryDetail';

const getVisibleProducts = (products) => {
    return products;
}

const mapStateToProps = (state, ownProps) => {
  return {
    products: getVisibleProducts(state.products),
    categoryName: ownProps.categoryName,
  };
};

const mapDispatchToProps = dispatch => ({
    addProduct: (productObj, qty) => {
      LocalDB.editProductQty(productObj, qty+1).then((product) => {
        dispatch(editProductQty(product.id, product.qty))
      });
    },
    removeProduct: (productObj, qty) => {
      LocalDB.editProductQty(productObj, Math.max(qty-1, 0)).then((product) => {
        dispatch(editProductQty(product.id, product.qty))
      })
    },
    deleteProduct: (productObj) => {
      LocalDB.deleteProduct(productObj).then(product => {
        dispatch(deleteProduct(product.id));
      })
    },
    loadProducts: (products) => dispatch(loadProducts(products)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryDetail)

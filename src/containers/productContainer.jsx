import { connect } from 'react-redux'
import { 
  editProduct,
  loadProduct,
  loadProductsByUniqueLabel,
} from '../action'
import * as localDB from '../database/localDB';
import ProductDetail from '../views/productDetail';

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.product.products,
    productName: ownProps.productName,
  }
};

const mapDispatchToProps = dispatch => ({
    editProduct: (id, productData) => dispatch(editProduct(id, productData)),
    loadProductByName: (productName) => {
      localDB.getProductByName(productName).then(products => {
        dispatch(loadProductsByUniqueLabel(products));
      })
    }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail)

import { connect } from 'react-redux'
import { 
  editProduct,
  loadProduct,
} from '../action'
import * as localDB from '../database/localDB';
import ProductDetail from '../views/productDetail';

const mapStateToProps = (state, ownProps) => {
  return {
    product: state.product,
    productName: ownProps.productName,
  }
};

const mapDispatchToProps = dispatch => ({
    editProduct: (id, productData) => dispatch(editProduct(id, productData)),
    loadProduct: (id) => {
      localDB.getProductById(id).then(product => {
        dispatch(loadProduct(product));
      })
    }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail)

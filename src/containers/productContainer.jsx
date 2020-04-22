import { connect } from 'react-redux'
import { 
  editProduct
} from '../action'
import ProductDetail from '../views/productDetail';

const mapStateToProps = (state, ownProps) => {
  return {
    product: state.product,
    productName: ownProps.productName,
  }
};

const mapDispatchToProps = dispatch => ({
    editProduct: (id, productData) => dispatch(editProduct(id, productData)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail)

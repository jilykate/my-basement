import { connect } from 'react-redux'
import { 
  addNewProduct,
  toggleMoreFields,
  closeMoreFields,
  resetFields,
} from '../action'
import AddNewProductForm from '../views/addNewProductForm';
import * as LocalDB from '../database/localDB';

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    isMoreFieldsVisible: state.addNewProductForm.isMoreFieldsVisible,
    categoryName: ownProps.categoryName || state.addNewProductForm.categoryName,
    productName: state.addNewProductForm.productName || '',
  };
};

const mapDispatchToProps = dispatch => ({
    addNewProduct: (productData) => {
      LocalDB.addNewProduct(productData).then(productId => {
        dispatch(addNewProduct(Object.assign(productData, {id: productId})));
      });
    },
    closeMoreFields: () => dispatch(closeMoreFields()),
    toggleMoreFields: () => dispatch(toggleMoreFields()),
    resetFields: () => dispatch(resetFields()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNewProductForm)

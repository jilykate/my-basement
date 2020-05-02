import { connect } from 'react-redux'
import { 
  addNewProduct,
  toggleMoreFields,
  closeMoreFields,
} from '../action'
import AddNewProductForm from '../views/addNewProductForm';
import * as LocalDB from '../database/localDB';

const mapStateToProps = (state, ownProps) => {
  return {
    isMoreFieldsVisible: state.addNewProductForm.isMoreFieldsVisible,
    categoryName: ownProps.categoryName,
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNewProductForm)

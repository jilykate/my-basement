import { connect } from 'react-redux'
import { 
  addNewProduct,
  toggleMoreFields,
} from '../action'
import AddNewProductForm from '../views/addNewProductForm';
import * as LocalDB from '../database/localDB';

const mapStateToProps = (state, ownProps) => {
  console.log('====addNewProductForm mapStateToProps===');
  console.log(state);
  return {
    isMoreFieldsVisible: state.addNewProductForm.isMoreFieldsVisible,
    categoryName: ownProps.categoryName,
  };
};

const mapDispatchToProps = dispatch => ({
    addNewProduct: (productData) => {
      LocalDB.addNewProduct(productData);
      dispatch(addNewProduct(productData));
    },
    toggleMoreFields: () => dispatch(toggleMoreFields()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNewProductForm)

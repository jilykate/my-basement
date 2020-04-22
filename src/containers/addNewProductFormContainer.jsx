import { connect } from 'react-redux'
import { 
  addNewProduct,
  toggleMoreFields,
} from '../action'
import AddNewProductForm from '../views/addNewProductForm';

const mapStateToProps = (state, ownProps) => {
  console.log('====addNewProductForm mapStateToProps===');
  console.log(state);
  return {
    isMoreFieldsVisible: state.addNewProductForm.isMoreFieldsVisible,
  };
};

const mapDispatchToProps = dispatch => ({
    addNewProduct: (productData) => dispatch(addNewProduct(productData)),
    toggleMoreFields: () => dispatch(toggleMoreFields()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNewProductForm)

import { connect } from 'react-redux'
import { addProduct } from '../actions'
import categoryDetail from '../views/categoryDetail';

const getVisibleProducts = (products) => {
    //TODO apply is_expired, is_deleted filter here.
  return products;
}

const mapStateToProps = state => ({
  todos: getVisibleProducts(state.todos)
})

const mapDispatchToProps = dispatch => ({
  addProduct: (id, qty) => dispatch(addProduct(id, qty))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(categoryDetail)

const products = (state = [], action) => {
  console.log('====products reducer===');
  console.log(action.id, action.qty);
  switch (action.type) {
    case 'ADD_PRODUCT':
      {
          return state.map((product) => {
            if (product.id === action.id) {
              product.qty = action.qty;
            }
            return product;
          })
      }
    default:
      return state
  }
}

export default products;

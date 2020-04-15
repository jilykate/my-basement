const products = (state = [], action) => {
  console.log('====products reducer===');
  console.log(action.id, action.qty);
  switch (action.type) {
    case 'ADD_PRODUCT':
    case 'REMOVE_PRODUCT':
      {
          return state.map((product) => {
            if (product.id === action.id) {
              product.qty = Math.max(action.qty, 0);
            }
            return product;
          })
      }
      break;
    default:
      return state
  }
}

export default products;

const products = (state = [], action) => {
  console.log('====products reducer===');
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

    case 'DELETE_PRODUCT': 
    {
        return state.filter((product)=> product.id !== action.id);
    }
    default:
      return state
  }
}

export default products;

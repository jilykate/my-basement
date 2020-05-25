const products = (state = [], action) => {
  switch (action.type) {
    case 'EDIT_PRODUCT_QTY':
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

    case 'ADD_NEW_PRODUCT':
    {
        if (state.filter((product) => product.name === action.productData.name).length) {
          return state.map(product => {
            if (product.name === action.productData.name) {
              product.qty += action.productData.qty;
            }
            return product;
          });
        }
        return state.concat([action.productData]);
    }

    case 'LOAD_PRODUCTS': {
      return action.products;
    }

    default:
      return state
  }
}

export default products;

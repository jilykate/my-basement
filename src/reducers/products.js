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
          return state;
        }

        return state.concat([{
          name: action.productData.name,
          brand: action.productData.brand,
          url_string: action.productData.name.replace(' ', '_'),
          qty: action.productData.qty,
          expiredDate: action.productData.expiredDate,
          desc: action.productData.desc,
        }]);
    }

    case 'LOAD_PRODUCTS': {
      return action.products;
    }

    default:
      return state
  }
}

export default products;

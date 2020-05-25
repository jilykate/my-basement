const products = (state = {}, action) => {
    switch (action.type) {
      case 'LOAD_PRODUCT_BY_UNIQUE_LABEL': 
        return {
            products: action.products,
        };
      default:
        return state
    }
  }
  
  export default products;
  
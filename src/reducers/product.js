const product = (state = {}, action) => {
    switch (action.type) {
      case 'LOAD_PRODUCT': 
        return action.product;
      default:
        return state
    }
  }
  
  export default product;
  
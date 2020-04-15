const product = (state = [], action) => {
    console.log('====product reducer===');
    console.log(action.id, action.qty);
    switch (action.type) {
      case 'EDIT_PRODUCT':
        return [
          ...state,
          {
            id: action.id,
            qty: action.qty,
          }
        ]
      default:
        return state
    }
  }
  
  export default product;
  
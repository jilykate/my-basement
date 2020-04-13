const categories = (state = [], action) => {
    console.log('====categories reducer===');
    console.log(action.id, action.qty);
    switch (action.type) {
      case 'ADD_CATEGORY':
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
  
  export default categories
  
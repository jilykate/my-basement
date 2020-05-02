const categories = (state = [], action) => {
    switch (action.type) {
      case 'ADD_CATEGORY':
        return [
          ...state,
          {
            id: action.id,
            qty: action.qty,
          }
        ];

      case 'LOAD_CATEGORIES':
        return action.categories;
  
      default:
        return state
    }
  }
  
  export default categories
  
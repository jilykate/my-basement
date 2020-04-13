const categories = (state = [], action) => {
    switch (action.type) {
      case 'ADD_QTY':
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
  
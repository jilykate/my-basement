const products = (state = [], action) => {
    switch (action.type) {
      case 'EDIT_PRODUCT':
        return [
          ...state,
          {
            id: action.id,
            desc: action.desc,
            name: action.name,
            expiredTime: action.expiredTime,
          }
        ]
      default:
        return state
    }
  }
  
  export default products
  
const addNewProductForm = (state = [], action) => {
    switch (action.type) {
        case 'TOGGLE_MORE_FIELDS':
                return {
                    categoryName: state.categoryName,
                    isMoreFieldsVisible : !state.isMoreFieldsVisible,
                    productName: state.productName,
                }

        case 'CLOSE_MORE_FIELDS':
            return {
                categoryName: state.categoryName,
                isMoreFieldsVisible: false,
                productName: state.productName,
            }

        case 'LOAD_PRODUCT':
            return {
                categoryName: action.product.category,
                isMoreFieldsVisible: state.isMoreFieldsVisible,
                productName: action.product.name,
            };
            
      default:
        return state;
    }
  }
  
  export default addNewProductForm;
  
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

        case 'LOAD_PRODUCT_BY_UNIQUE_LABEL': 
            return {
                categoryName: action.products[Object.keys(action.products)[0]].length ? action.products[Object.keys(action.products)[0]][0].category : '',
                isMoreFieldsVisible: state.isMoreFieldsVisible,
                productName: action.products[Object.keys(action.products)[0]].length ? action.products[Object.keys(action.products)[0]][0].name : '',
            };

        case 'RESET_FIELDS':
            return {
                categoryName: '',
                isMoreFieldsVisible: false,
                productName: '',
            };
            
      default:
        return state;
    }
  }
  
  export default addNewProductForm;
  
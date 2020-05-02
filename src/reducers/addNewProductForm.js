const addNewProductForm = (state = [], action) => {
    switch (action.type) {
        case 'TOGGLE_MORE_FIELDS':
                return {
                    isMoreFieldsVisible : !state.isMoreFieldsVisible,
                }

        case 'CLOSE_MORE_FIELDS':
            return {
                isMoreFieldsVisible: false,
            }
      default:
        return state;
    }
  }
  
  export default addNewProductForm;
  
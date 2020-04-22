const addNewProductForm = (state = [], action) => {
    console.log('====addNewProductForm reducer===');
    switch (action.type) {
        case 'TOGGLE_MORE_FIELDS':
                return {
                    isMoreFieldsVisible : !state.isMoreFieldsVisible,
                }
      default:
        return state;
    }
  }
  
  export default addNewProductForm;
  
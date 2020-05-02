import categories from "./initialState/categories";

  export const editProductQty = (id, qty) => ({
    type: 'EDIT_PRODUCT_QTY',
    id,
    qty,
  });
  
  export const editProduct = (id, productData) => ({
    type: 'EDIT_PRODUCT',
    productData,
  });

  export const deleteProduct = (id) => ({
    type: 'DELETE_PRODUCT',
    id,
  });

  export const removeCategory = (id) => ({
      type: 'REMOVE_CATEGORY',
  });

  export const addCategory = (name) => ({
        type: 'ADD_CATEGORY',
  });

  export const addNewProduct = (productData) => ({
      type: 'ADD_NEW_PRODUCT',
      productData,
  });

  export const toggleMoreFields = () => ({
    type: 'TOGGLE_MORE_FIELDS',
  });
  
  export const loadCategories = (categories) => ({
    type: 'LOAD_CATEGORIES',
    categories,
  });

  export const loadProducts = (products) => ({
    type: 'LOAD_PRODUCTS',
    products,
  });

  export const closeMoreFields = () => ({
    type: 'CLOSE_MORE_FIELDS',
  });

  export const loadProduct = (product) => ({
    type: 'LOAD_PRODUCT',
    product,
  });
  
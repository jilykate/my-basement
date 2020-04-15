export const addProduct = (id, qty) => ({
    type: 'ADD_PRODUCT',
    id,
    qty: ++qty,
  });
  
  export const editProduct = (id, desc, name, expiredTime) => ({
    type: 'EDIT_PRODUCT',
    id,
    desc,
    name,
    expiredTime,
  });

  export const removeProduct = (id, qty) => ({
      type: 'REMOVE_PRODUCT',
      id,
      qty: --qty,
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

  export const addNewProduct = (name) => ({
      type: 'ADD_NEW_PRODUCT',
      name,
  })
  
  
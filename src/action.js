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
  
  
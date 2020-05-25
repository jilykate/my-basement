import { openDB, deleteDB, wrap, unwrap } from 'idb';
if (!('indexedDB' in window)) {
    console.log('This browser doesn\'t support our functionality');
}

function onupgradeneeded (myBasementDB) {
    if (!myBasementDB.objectStoreNames.contains('category')) {
        var categoriesOS = myBasementDB.createObjectStore('category', {keyPath: 'id', autoIncrement: true});
        categoriesOS.createIndex('url_string', 'url_string', {unique: true});
        categoriesOS.createIndex('name', 'name', {unique: true});
    }
    if (!myBasementDB.objectStoreNames.contains('product')) {
        var productOS = myBasementDB.createObjectStore('product', {keyPath: 'id', autoIncrement: true});
        productOS.createIndex('name', 'name', {unique: false});
        productOS.createIndex('brand', 'brand', {unique: false});
        productOS.createIndex('desc', 'desc', {unique: false});
        productOS.createIndex('expiredDate', 'expiredDate', {unique: false});
        productOS.createIndex('qty', 'qty', {unique: false});
        productOS.createIndex('category', 'category', {unique: false});
        productOS.createIndex('uniqueLabel', 'uniqueLabel', {unique: true});
    }

    
    categoriesOS.put({
        name: 'Food',
        url_string: 'food',
        icon_string: 'faBreadSlice',
    });
    categoriesOS.put({
        name: 'Drinks',
        url_string: 'drinks',
        icon_string: 'faCocktail',
    });
    categoriesOS.put({
        name: 'Baby care',
        url_string: 'baby_care',
        icon_string: 'faHandSparkles',
    });
    categoriesOS.put({
        name: 'Personal care',
        url_string: 'personal_care',
        icon_string: 'faBath',
    });
    categoriesOS.put({
        name: 'House care',
        url_string: 'house_care',
        icon_string: 'faBaby',
    });
    categoriesOS.put({
        name: 'Others',
        url_string: 'others',
        icon_string: 'faCat',
    });
};   

export const addNewProduct = async (data)=> {
    let dbRequest = await openDB('mybasement-db', 1, {
        upgrade(db) { 
            onupgradeneeded(db);
        }
    });
    let tx = dbRequest.transaction('product', 'readwrite');
    let store = tx.objectStore('product');
    let productId;
    const uniqueLabel = `${data.name}-${data.brand}-${data.expiredDate}`;

    let product = await store.index('uniqueLabel').get(uniqueLabel);
    if (!product) {
        console.log('====this product is a new product====');
        productId = await store.put(Object.assign(data, {uniqueLabel: uniqueLabel}));
        await tx.complete;
    } else {
        console.log('====this product is an existing product ====', product.qty);
        let updatedProduct = Object.assign(product, {qty: data.qty + 1});
        await store.put(updatedProduct);
        productId = product.id;
    }

    dbRequest.close();
    return productId;
}

export const getAllProducts = async () => {
    let dbRequest = await openDB('mybasement-db', 1, {
        upgrade(db) { 
            onupgradeneeded(db);
        }
    });
    let tx = dbRequest.transaction('product', 'readwrite');
    let store = tx.objectStore('product');
    
    let allProducts = await store.getAll();
    dbRequest.close();
    return allProducts;
}

export const getAllCategories = async () => {
    let dbRequest = await openDB('mybasement-db', 1, {
        upgrade(db) { 
            onupgradeneeded(db);
        }
    });
    
    let tx = dbRequest.transaction('category', 'readwrite');
    let store = tx.objectStore('category');
    
    let allCategories = await store.getAll();
    dbRequest.close();
    return allCategories;
}

export const getProductByCategory = async (cateogry) => {
    let dbRequest = await openDB('mybasement-db', 1, {
        upgrade(db) { 
            onupgradeneeded(db);
        }
    });

    let tx = dbRequest.transaction('product', 'readwrite');
    let store = tx.objectStore('product');

    let products = await store.index('category').getAll(cateogry);

    let productsGroupByName = [];
    products.forEach(product => {
        if (productsGroupByName.filter(item => item.name === product.name).length) {
            productsGroupByName.filter(item => item.name === product.name)[0].qty += product.qty;
            console.log(productsGroupByName.filter(item => item.name === product.name)[0].qty);
        } else {
            productsGroupByName.push({name: product.name, qty: product.qty});
        }
    })
    dbRequest.close();
    return productsGroupByName;
}

export const getProductByName = async (productName) => {
    let dbRequest = await openDB('mybasement-db', 1, {
        upgrade(db) { 
            onupgradeneeded(db);
        }
    });

    let tx = dbRequest.transaction('product', 'readwrite');
    let store = tx.objectStore('product');

    let products = await store.index('name').getAll(productName);

    let productsGroupByUniqueLabel = {};
    products.forEach(product => {
        if (!productsGroupByUniqueLabel[product.uniqueLabel]) {
            productsGroupByUniqueLabel[product.uniqueLabel] = [];
        }
        productsGroupByUniqueLabel[product.uniqueLabel].push(Object.assign({}, product));
    })
    dbRequest.close();
    return productsGroupByUniqueLabel;
}

export const getProductById = async (id) => {
    let dbRequest = await openDB('mybasement-db', 1, {
        upgrade(db) { 
            onupgradeneeded(db);
        }
    });

    let tx = dbRequest.transaction('product', 'readwrite');
    let store = tx.objectStore('product');

    console.log('====getProductById====', id);
    let product = await store.get(parseInt(id, 10));
    dbRequest.close();
    return product;
}

export const editProductQty = async (productObj, qty) => {
    let dbRequest = await openDB('mybasement-db', 1, {
        upgrade(db) { 
            onupgradeneeded(db);
        }
    });

    let tx = dbRequest.transaction('product', 'readwrite');
    let store = tx.objectStore('product');

    let product = await store.index('name').get(productObj.name);
    if (!product) {
        dbRequest.close();
        return null;
    }
    let updatedProduct = Object.assign(product, {qty: qty});
    await store.put(updatedProduct);
    dbRequest.close();
    return updatedProduct;
}

export const deleteProduct = async (productObj) => {
    let dbRequest = await openDB('mybasement-db', 1, {
        upgrade(db) { 
            onupgradeneeded(db);
        }
    });

    let tx = dbRequest.transaction('product', 'readwrite');
    let store = tx.objectStore('product');
    
    await store.delete(productObj.id);
    dbRequest.close();
    return productObj;
};








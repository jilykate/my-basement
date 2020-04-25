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
        productOS.createIndex('name', 'name', {unique: true});
        productOS.createIndex('brand', 'brand', {unique: false});
        productOS.createIndex('desc', 'desc', {unique: false});
        productOS.createIndex('expiredDate', 'expiredDate', {unique: false});
        productOS.createIndex('qty', 'qty', {unique: false});
        productOS.createIndex('category', 'category', {unique: false});
    }

    
    categoriesOS.put({
        name: 'Food',
        url_string: 'food',
    });
    categoriesOS.put({
        name: 'Drinks',
        url_string: 'drinks',
    });
    categoriesOS.put({
        name: 'Baby care',
        url_string: 'baby_care',
    });
    categoriesOS.put({
        name: 'Personal care',
        url_string: 'personal_care',
    });
    categoriesOS.put({
        name: 'House care',
        url_string: 'house_care',
    });
    categoriesOS.put({
        name: 'Others',
        url_string: 'others',
    });

    productOS.put({
        name: 'apple',
        qty: 5,
        expiredTime: '2020-01-01',
        desc: 'this is an apple',
        category: 'food',
    });

    productOS.put({
        name: 'beer',
        qty: 50,
        expiredTime: '2020-03-01',
        desc: 'this is a beer',
        category: 'drinks',
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
    await store.put(data);
    await tx.complete;
    dbRequest.close();
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
    dbRequest.close();
    return products;
}








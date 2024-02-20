const products = require('./products');

const product_db = {
    getAll: () => {
        return new Promise((resolve, reject) => {
            resolve(products);
        });
    },
    getOne: (code) => {
        return new Promise((resolve, reject) => {
            const product = products.find(p => p.code === code);
            console.log(`Returning ${product}`);
            resolve(product || null);
        });
    },
    addOne: (product) => {
        return new Promise((resolve, reject) => {
            product._id = Math.random().toString(36).substr(2, 9);
            products.push(product);
            resolve(product);
        });
    },
    updateOne: (code, updatedProduct) => {
        return new Promise((resolve, reject) => {
            const index = products.findIndex(p => p.code === code);
            if (index === -1) {
                reject(new Error('Product not found'));
            } else {
                products[index] = updatedProduct;
                resolve(updatedProduct);
            }
        });
    }
};

module.exports = product_db;

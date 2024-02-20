const product_db = require('../data/product_db');

const productsController = {
    getAll: (req, res) => {
        product_db.getAll()
            .then(products => {
                res.status(200).json(products);
            })
            .catch(error => {
                res.status(500).json({ error: error.message });
            });
    },
    getOne: (req, res) => {
        const code = req.params.code;
        console.log(JSON.stringify(req.params));
        console.log(`Looking for code ${code}`);
        product_db.getOne(code)
            .then(product => {
                if (!product) {
                    res.status(404).json({ message: 'Product not found' });
                } else {
                    res.status(200).json(product);
                }
            })
            .catch(error => {
                res.status(500).json({ error: error.message });
            });
    },
    addOne: (req, res) => {
        const product = req.body;
        product_db.addOne(product)
            .then(newProduct => {
                res.status(201).json(newProduct);
            })
            .catch(error => {
                res.status(500).json({ error: error.message });
            });
    },
    updateOne: (req, res) => {
        const code = req.params.code;
        const updatedProduct = req.body;
        product_db.updateOne(code, updatedProduct)
            .then(updatedProduct => {
                res.status(200).json(updatedProduct);
            })
            .catch(error => {
                res.status(500).json({ error: error.message });
            });
    }
};

module.exports = productsController;

const generateRandomCode = () => {
    const min = 10001;
    const max = 99999;
    return String(Math.floor(Math.random() * (max - min + 1)) + min);
};

const generateRandomDescription = () => {
    const latinWords = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
    return latinWords;
};

const generateRandomPrice = () => {
    return parseFloat((Math.random() * (89.99 - 9.99) + 9.99).toFixed(2));
};

const generateRandomQtyInStock = () => {
    return Math.floor(Math.random() * 101);
};

const products = [
    {
        _id: "550e8400-e29b-41d4-a716-446655440000",
        code: "200130",
        name: 'Product 1',
        description: `Product 1 ${generateRandomDescription()}`,
        price: generateRandomPrice(),
        qtyInStock: generateRandomQtyInStock()
    },
    {
        _id: "550e8400-f29b-41d4-a716-446655440000",
        code: "300401",
        name: 'Product 2',
        description: `Product 2 ${generateRandomDescription()}`,
        price: generateRandomPrice(),
        qtyInStock: generateRandomQtyInStock()
    },
    {
        _id: "560e8400-e29b-41d4-a716-446655440000",
        code: "400501",
        name: 'Product 3',
        description: `Product 3 ${generateRandomDescription()}`,
        price: generateRandomPrice(),
        qtyInStock: generateRandomQtyInStock()
    }
];

module.exports = products;

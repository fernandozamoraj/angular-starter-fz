const express = require('express');
const cors = require('cors');
const router = require('./api/routes/product_routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


// Use the routes from routes.js
app.use('/', router);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('api running');
});

app.get('/studentCareer', (req, res) => {
    res.status(200).json(require('./carrerResponse.json'));
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

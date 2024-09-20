const express = require('express');
const app = express();
const port = 8080;

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

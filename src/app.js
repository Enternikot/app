const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = 3000;
app.use(bodyParser.json());


app.get('/', (req,res) => {
    res.send('HELLO MARS!');
});

app.listen(PORT,() => {
    console.log('SERVER IST RUNNING!');
});
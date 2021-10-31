const express = require('express');
const app = express();
const port = 3000;
// const path = require('path');
// const morgan = require('morgan');

// const route = require('./routes');
// const db = require('./config/db');

// Connect to DB
// db.connect();

// app.use(express.static(path.join(__dirname, 'public')));

// app.use(express.urlencoded({extended: true,}),);


app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})


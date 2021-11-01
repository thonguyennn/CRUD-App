const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const morgan = require('morgan');
const methodOverride = require('method-override');
const route = require('./routes');
const db = require('./config/index');

// Connect to DB
db.connect();

// HTTP log
app.use(morgan('tiny'));

// template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({extended: true,}),);

// override method
app.use(methodOverride('_method'));

// Routes init
route(app);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})


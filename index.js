const express = require('express');
const app = express();
require('dotenv').config();

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use(express.urlencoded({
    extended: true
}));

const path = require('path');
const public = path.join(__dirname,'public');
app.use(express.static(public));

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('/popper', express.static(__dirname + '/node_modules/popper'));

const views_path = path.join(__dirname + '/views'); // views path

const mustache = require('mustache-express');
// Initialise template/view engine with partials path
app.engine('mustache', mustache(views_path + '/partials', '.mustache'));
app.set('view engine', 'mustache');
app.set('views', views_path); // Initialise views path

const router = require('./routes/pageRoutes');
app.use('/', router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}. Ctrl^c to quit.`);
});


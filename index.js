/*
============================================
; Title:  index.js
; Author: Brett Grashorn
; Date:   23 January 2023
; Description: Server and route file for Pets-R-Us app
;===========================================
*/

// Imports
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const Customer = require('./models/customers');

const app = express();

// Creates mongoose connection
const CONN = "mongodb+srv://web340_admin:web340admin@bellevueuniversity.3x5untt.mongodb.net/web340DB";

// Displays if mongoose is running or shows error message if not
mongoose.connect(CONN).then(() => {
    console.log('Connection to MongoDB database was successful\n If you see this message it means you were able to connect to your MongoDB atlas cluster');
}).catch(err => {
    console.log('MongoDB error: ' + err.message);
})

// Set Views & Static files
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/styles')));
app.use(express.static(path.join(__dirname, 'public/images')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Set PORT to 4000
const PORT = process.env.PORT || 4000;


app.get('/', (req, res) => {
    res.render('index', {
        title: 'Pets-R-Us: Home',
        pageTitle: 'Landing Page'
    })
});

app.get('/grooming', (req, res) => {
    res.render('grooming', {
        title: 'Pets-R-Us: Grooming',
        pageTitle: 'Pets-R-Us: Grooming'
    })
});

app.get('/boarding', (req, res) => {
    res.render('boarding', {
        title: 'Pets-R-Us: Boarding',
        pageTitle: 'Pets-R-Us: Boarding'
    })
});

app.get('/training', (req, res) => {
    res.render('training', {
        title: 'Pets-R-Us: Training',
        pageTitle: 'Pets-R-Us: Training'
    })
});

app.get('/register', (req, res) => {
    res.render('register', {
        title: 'Pets-R-Us: Registration',
        pageTitle: 'Pets-R-Us: Registration'
    })
});

app.get('/customer-list', (req, res) => {
    res.render('customer-list', {
        title: 'Pets-R-Us: Customer List',
        pageTitle: 'Pets-R-Us: Customer List'
    })
});

// Post route
app.post('/customers', (req, res, next) => {
    console.log(req.body);
    console.log(req.body.customerId);
    console.log(req.body.email);
    const newCustomer = new Customer({
        customerId: req.body.customerId,
        email: req.body.email,
    });

    console.log(newCustomer);

    Customer.create(newCustomer, function (err, customer) {
        if (err) {
            console.log(err);
            next(err);
        } else {
            res.render('index', {
                title: 'Pets-R-Us',
                pageTitle: 'Landing Page'
            });
        }
    });
});

app.get('/customers', (req, res) => {
    Customer.find({}, function(err, customers) {
        if (err) {
            console.log(err);
            next(err);
        } else {
            res.render('customer-list', {
                title: 'Pets R Us: Customer List',
                pageTitle: 'Our Customers',
                customers: customers
            })
        }
    })
})

// Listen on Port 4000
app.listen(PORT, () => {
    console.log('Application started and listening on PORT ' + PORT);
});




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

const app = express();



// Set Views
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/styles')));
app.use(express.static(path.join(__dirname, 'public/images')));


// Set PORT to 3000
const CONN = 'mongodb+srv://web340_admin:web340admin@bellevueuniversity.3x5untt.mongodb.net'
const PORT = process.env.PORT || 3000;

// mongoose.connect(CONN).then(() => {
//     console.log('Connection to MongoDB database was successful\n If you see this message it means you were able to connect to your MongoDB atlas cluster');
// }).catch(err => {
//     console.log('MongoDB error: ' = err.message);
// })

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

// Listen on Port 3000
app.listen(PORT, () => {
    console.log('Application started and listening on PORT ' + PORT);
});


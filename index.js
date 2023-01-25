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

const app = express();

// Set Views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Pets-R-Us: Landing',
        pageTitle: 'Landing Page'
    })
});

app.get('/grooming', (req, res) => {
    res.render('grooming', {
        title: 'Grooming Page',
        pageTitle: 'Grooming Page'
    })
});




// Listen on Port 3000
app.listen(PORT, () => {
    console.log('Application started and listening on PORT ' + PORT);
});


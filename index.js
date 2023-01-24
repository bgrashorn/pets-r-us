/*
============================================
; Title:  index.js
; Author: Brett Grashorn
; Date:   23 January 2023
; Description: Server and route file for Pets-R-Us app
;===========================================
*/

// Imports
const { application } = require('express')
const express = require('express')
const app = express()
const port = 3000


// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))


//Set Views
app.set('views', './views')
app.set('view engine', 'ejs')


app.get('', (req, res) => {
    res.render('index', {
        title: 'Pets-R-Us: Landing',
        pageTitle: 'Landing Page'
    })
});

app.get('./grooming', (req, res) => {
    res.render('grooming', {
        title: 'Pets-R-Us: Grooming',
        pageTitle: 'Grooming'
    })
});





// Listen on Port 3000
app.listen(port, () => console.info(`Listening on port ${port}`))


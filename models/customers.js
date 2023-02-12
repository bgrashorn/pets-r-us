/*
============================================
; Title:  customers.js
; Author: Brett Grashorn
; Date:   12 February 2023
; Description: Customers.js file for registration page. 
;===========================================
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let customerSchema = new Schema({
    customerId: {type: String, required: true, unique: true },
    email: {type: String, required: true, unique: true }
});

module.exports = mongoose.model('Customer', customerSchema);
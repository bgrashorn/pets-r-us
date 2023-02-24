/*
============================================
; Title:  appointment.js
; Author: Brett Grashorn
; Date:   23 February 2023
; Description: appointment.js file for Booking page. 
;===========================================
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    userName: {type: String, required: true, unique: true},
    firstName: {type: String, required: true, unique: true},
    lastName: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    service: {type: String, required: true, unique: true}
})

module.exports = mongoose.model('Appointment', appointmentSchema);
const mongoose = require('mongoose')

const supplierSchema = mongoose.Schema({
    supplierNumber: Number,
    supplierName: String,
    createdOn: Date,
    city: String,
    postalCode: String,
    street: String,
    houseNumber: String,
    state: String,
    contactPersonName: String,
    phoneNumber: Number,
    mailAdress: String
})

const supplierModel = mongoose.model('Materials',supplierSchema);
module.exports = supplierModel
const mongoose = require('mongoose')

const purchasingSchema = mongoose.Schema({
    supplierNumber: Number,
    supplierName: String,
    purchaseNumber: Number,
    materialNumber: String,
    quantity: Number,
    quantityUnitOfMeasure: String,
    cretedOn: Date
})

const purchasingModel = mongoose.model('Materials',purchasingSchema);
module.exports = purchasingModel
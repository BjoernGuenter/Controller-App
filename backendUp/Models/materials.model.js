const mongoose = require('mongoose')

const materialSchema = mongoose.Schema({
    materialNumber: String,
    materialName: String,
    materialType: String,
    quantity: Number,
    price: Number,
    sourcingPrice: Number,
    storageLocationID: String,
    quantityUnitOfMeasure: String,
    createdOn: Date
})

const customerModel = mongoose.model('Materials',materialSchema);
module.exports = materialModel
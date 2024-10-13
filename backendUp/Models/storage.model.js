const mongoose = require('mongoose')

const storageSchema = mongoose.Schema({
    storageLocationID: String,
    storageLocation: String,
    materialNumber: String,
    quantity: String,
    quantityUnitOfMeasure: String,
    dateOfStorage: Date
})

const storageModel = mongoose.model('Storages',storageSchema);
module.exports = storageModel
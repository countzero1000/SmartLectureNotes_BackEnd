const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Schema = new mongoose.Schema({

    _id: Schema.Types.ObjectId,
    name: String,
    documents : {type :Schema.Types.ObjectId , ref : 'documents'},
    


})

module.exports = mongoose.model('document',documentSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mySchema = new Schema({
    id: {
    	type: String,
    	required: true
    },
    question: {
    	type: String,
    	required: true
    }
}, { timestamps: true });

const DataModel = mongoose.model('myModels', mySchema);

module.exports = DataModel;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// id, question, score, array of reponse, side pairs?, scores for each post 
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

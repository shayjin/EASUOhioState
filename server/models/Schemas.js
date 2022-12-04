const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nameSchema = new Schema({
    name: {type: String, required: true}
});

const SuggestionSchema = new Schema({
    content: {type: String, required: true, default: null}
});

const Names = mongoose.model('Name', nameSchema, 'Name');
const Suggestions = mongoose.model('Suggestion', SuggestionSchema, 'Suggestion');
const mySchemas = {'Name': Names, 'Suggestion': Suggestions};

module.exports = mySchemas;
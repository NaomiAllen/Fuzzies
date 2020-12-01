const mongoose = require('mongoose');

const fuzziesSchema = new mongoose.Schema({
    name: {type: String, required :true},
    location: {type: String, required: true},
    Male: {type: checkbox, required: false},
    Female: {type: checkbox, required: false},
    description: {type: textarea, required: false}
})

const Fuzzies = mongoose.model('Fuzzies, fuzziesSchema');

module.export = Fuzzies;
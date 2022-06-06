const mongoose = require('mongoose');

const ListSchema = mongoose.Schema({
    task:{
        type : String,
        unique :false
    },
    createdAt : {
        type : String,

    },
    creator :{
        type: String
    }
});

const List = mongoose.model('List', ListSchema);

module.exports = List;
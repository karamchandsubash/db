const mongoose = require('mongoose');

const ConnectDB = async ()=>{
    await mongoose.connect("mongodb+srv://Subash_11:Subash29@cluster0.o5gqm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
}

module.exports = ConnectDB;

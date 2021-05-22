const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://sanjanasingh:kantadevi@cluster0.ap86g.mongodb.net/foodvault?retryWrites=true&w=majority'

mongoose.connect(mongoURL , {useUnifiedTopology:true , useNewUrlParser:true})

var db= mongoose.connection

db.on('connected' , ()=>{
    console.log('Mongodb connection successful');
})

db.on('error', ()=>{
    console.log('mongodb failed');
})

module.exports = mongoose
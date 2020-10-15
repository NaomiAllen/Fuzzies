const express = require('express');
const mongoose = require('mongoose');
const app = express();
port= 3000

app.use(express.urlencoded({extended:true}));

app.get('/', (req, res)=>{
    res.render('new.ejs');
    
});

app.post('/fuzzies/', (req,res)=>{
    res.send(req.body)
})

mongoose.connect('mongodb://localhost:27017/basiccrud',{useNewUrlParser: true});
mongoose.connection.once('open', ()=>{
    console.log('connected to mongo')
});


app.listen(port, ()=>{
    console.log('I am Listening')
})
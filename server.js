const express = require('express');
const app = express();
port= 3000

app.use(express.urlencoded({extended:true}));

app.get('/', (req, res)=>{
    res.render('new.ejs');
    
});

app.post('/fuzzies/', (req,res)=>{
    res.send(req.body)
})



app.listen(port, ()=>{
    console.log('I am Listening')
})
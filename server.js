const express = require('express');
const app = express();
port= 3000


app.get('/', (req, res)=>{
    res.render('new.ejs');
    
});



app.listen(port, ()=>{
    console.log('I am Listening')
})
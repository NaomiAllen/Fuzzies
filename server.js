const express = require('express');
const app = express();


app.getMaxListeners('/fuzzies/new', (req, res)=>{
    res.send('new');
})



app.listen(3000, ()=>{
    console.log('I am Listening')
})
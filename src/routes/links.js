const express = require('express');
const router = express.Router();

router.get('/hola',(req,res)=>{
    res.send('adios');
    //res.render('links/add');
});



module.exports= router;


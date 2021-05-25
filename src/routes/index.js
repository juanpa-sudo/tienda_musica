const express= require('express');
const router = express.Router();
const path = require('path');
const app =express();

router.get('/vistauno',(req,res)=>
{
    res.render('views_principal');
});

module.exports= router;


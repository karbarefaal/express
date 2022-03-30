const fs = require('fs');
const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
    res.send('<h1>Admin</h1>');
    
});

router.post('/message',(req,res)=>{
    const message = req.body.message;
    fs.writeFile(path.join(__dirname,"..","data","message.js"),message,(err)=>{
        if(err) throw err;
        res.redirect('/');
    });
    
});

module.exports = router;
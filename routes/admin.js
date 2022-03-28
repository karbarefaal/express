const fs = require('fs');

const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
    res.send('<h1>Admin</h1>')
    
});

router.post('/message',(req,res)=>{
    const message = req.body.message;
    fs.writeFile('../data/message.txt',message,err=>{
        if(err) throw err;
        res.redirect('/');
    });
    
});

module.exports = router;
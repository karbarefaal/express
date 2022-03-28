const express = require('express');

const router = express.Router();

router.get('/',(req,res) =>{
    res.send("<conter><form action='/admin/message' method='POST'><input type='text' name='message' /><input type='submit' /></form></conter>");
});


router.get('/hello',(req,res)=>{
    res.send('<h1>hellow world</h1>');
});

module.exports = router;


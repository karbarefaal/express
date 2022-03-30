const path = require('path');

const express = require('express');
const bodyParser=require('body-parser');

const adminRoutes = require('./routes/admin');
const homeRoutes = require('./routes/home');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,"public")))


//Routes
app.use('/admin',adminRoutes); // /admin/message   is path filtering
app.use(homeRoutes);
// End routes

app.use((req,res) =>{
    res.sendFile(path.join(__dirname,"views","404.html"))
});


app.listen(3000);




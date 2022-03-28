const express = require('express');
const bodyParser=require('body-parser');

const adminRoutes = require('./routes/admin');
const homeRoutes = require('./routes/home');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));


//Routes
app.use('/admin',adminRoutes); // /admin/message   is path filtering
app.use(homeRoutes);
// End routes


app.listen(3000);




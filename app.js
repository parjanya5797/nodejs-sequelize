const express = require('express');
const app = express();

const port = 8080;
require('./models');
var userController = require('./controllers/userController');
app.get('/',(req,res) => {
    res.send("Home Page");
})

app.get("/add",userController.addUser);
app.get("/crud",userController.crudOperation);
app.get('/query',userController.queryData);

app.listen(port,() => {
    console.log(`App Running in port ${port}`);
})
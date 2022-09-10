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
app.get('/filter',userController.filterData);
app.get('/setter-getter',userController.setterGetter);
app.get('/validation',userController.validationCheck);
app.get('/raw-query',userController.rawQuery);
app.get('/one-to-one',userController.oneToOne);

app.listen(port,() => {
    console.log(`App Running in port ${port}`);
})
var db = require('../models');

const Users = db.users;

var addUser = async (req,res) => {
    // Method 1: To Create Row
    // let data = await Users.build({name:"Tes11t",email:'test1@test.com'});
    // await data.save();

    //Method 2
    let data = await Users.create({name:"Demo Nam111e",email:"demo@demo.c11om"});

    //get Data Values
    console.log(data.dataValues); 

    //Update Data 
    // data.name = "Updated Name";
    // data.save(); 

    // delete User data
    // data.destroy();

    //reload 
    data.name = "New Name";
    data.reload();



    let response = {
        data:{...data.dataValues}
    }
    res.status(200).json(response);
}

module.exports = {
    addUser
}
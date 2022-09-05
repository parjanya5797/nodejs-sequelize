const { users } = require('../models');
var db = require('../models');

const Users = db.users;

const {Sequelize,Op} = require('sequelize');
const { create } = require('lodash');

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
    
    //reload undo's the new changes
    // data.name = "New Name";
    // data.reload();
    
    
    
    let response = {
        data:{...data.dataValues}
    }
    res.status(200).json(response);
}

var crudOperation = async (req,res) => {
    
    // insert 
    // let data = await Users.create({name:"CRUD Name",email:"crud@crud.com",gender:"male"});
    
    //update
    // let data = await Users.update({name:'changed Name1a',gender:"female"},{
    //     where: {
    //         id:19
    //     }
    // })
    
    //delete
    // let data = await Users.destroy({
    //     where:{
    //         id:19
    //     }
    // });
    
    //truncate whole table
    // let data =  await Users.destroy({
    //     truncate:true,
    // });
    
    //Bulk Insert
    
    // let data = await Users.bulkCreate([
    //     {
    //         name: "First",
    //         email:"first@first.com",
    //     },
    //     {
    //         name: "Second",
    //         email:"second@second.com",
    //     },
    //     {
    //         name: "Third",
    //         email:"third@third.com",
    //     }
    // ]);
    
    
    //find All
    // let data = await Users.findAll({});
    
    //findOne
    let data = await Users.findOne({where:{
        id:22
    }});
    
    
    let response = {
        data: {...data},
    };
    res.status(200).json(response);
}

var queryData = async (req,res) =>{
    //fields prevents other data except the one in array to be inserted into the DB
    // data = await Users.create({name:"Form Query Data111",email:"query@admin.com",gender:"Male"},{
    //     fields:['email','gender']
    // });
    
    //Select 
    //Select only selected fields in the attributes key
    //If you want to rename the field name then make another array that consists of the original name and the new name
    //group is used for groupBy
    
    // let data = await Users.findAll({
    //     attributes:[
    //         'name',
    //         ['email','emailID'],
    //         'gender',
    //         // [Sequelize.fn('COUNT',Sequelize.col('email')),'emailCount'], // Count emails
    //         [Sequelize.fn('CONCAT',Sequelize.col('name'),' test'),'nameConcat'], // Concat name
    
    //     ],
    //     group: ['name', 'email', 'gender']
    // });
    
    //include or exclude
    //exclude returns other columns except the ones added 
    // let data = await Users.findAll({
    //     attributes: {
    //         exclude:['created_at'],
    //         include:[
    //             [Sequelize.fn('CONCAT',Sequelize.col('name'),' Singh'),'full_name']
    //         ]
    //     },
    
    // });
    
    //Conditional Operators
    // let data = await Users.findAll({
    //     where:{
    //         // id:20
    //         id:{
    //             [Op.eq]:20
    //         },
    //         email:{
    //             [Op.like]:"first@first.com"
    //         }
    //     }
    // })
    
    //Order Group BY
    // let data = await Users.findAll({
    //     attributes:{
    //         exclude:['created_at','updated_at'],
    //     },
    //     order:[
    //         ['name','DESC'],
    //         ['email','ASC'],
    //     ],
    //     group:['email','name','gender','id'],
    //     // limit:2, //shows only 2 records
    //     // offset:2 //Skips 2 records
    // })
    
    
    //Count with conditions
    let data = await Users.count({
        where:{
            id:{
                [Op.eq]:20 
            }
        }
    });
    let response = {
        data:data,
    }
    res.status(200).json(response)
}

let filterData = async (req,res) => {
    
    // let data = await Users.findAll({});     //get all data
    
    // let data = await Users.findOne({});     //get latest one data
    
    // let data = await Users.findByPk(21)      //get one by PK
    
    // let data = await Users.findAndCountAll({      //list and count all the records
    //     where: {
    //         email:{
    //             [Op.like]:'%admin%'
    //         }
    //     }
    // })
    
    let [data,created] = await Users.findOrCreate({   //finds the row matching the conditions or creates a new record
        where:{name:'dummy1111sssss'},
        defaults:{
            email:"findOrCreate@mail.com",
            gender:"male"
        }
    })                 //returns data with the data and created boolean value
    
    let response = {
        data:data,
        // add:created,
    }
    res.status(200).json(response);
}

let setterGetter = async (req,res) => {
    //setter is used to set data before inserting it to the DB.It is defined in the respective model 
    // let data = await Users.create({name:"Setter",email:"setter@mail.com",gender:"male"})

    let data = await Users.findByPk(22);
    let response = {
        data: "setter-getter",
        info: data
    }
    res.status(200).json(response);
}

module.exports = {
    addUser,crudOperation,queryData,filterData,setterGetter
}
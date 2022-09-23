const {Sequelize,DataTypes} = require('sequelize');

//logging false hides all the internal query
const sequelize = new Sequelize('node-express-sequelize','postgres','123456789',{
    host:'localhost',
    dialect:"postgres",
    logging:true,
    pool:{max:5,min:0,idle:10000}
});


sequelize.authenticate()
.then(() => {
    console.log('connected to DB');
})
.catch(err => {
    console.log('Error'+err);
})

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('./users')(sequelize,DataTypes);
db.posts = require('./posts')(sequelize,DataTypes);

//force:true removes the existing DB tables and creates new Tables
//match:/_test$/ run sync only if the database name ends with test otherwize returns with an error
db.sequelize.sync({force:false,match:/node-express-sequelize$/})
.then(() => {
    console.log("Yes Re Synced");
})

// db.users.hasOne(db.posts,{foreignKey:'user_id',as:'PostInfo'}); //default userId
db.users.hasMany(db.posts,{foreignKey:'user_id',as:'postDetail'}); //default userId


db.posts.belongsTo(db.users,{foreignKey:'user_id',as:'UserInfo'});

module.exports = db;

module.exports = (sequelize,DataTypes) => {
    const Users = sequelize.define("users",{
        name:DataTypes.STRING,
        email:{
            type: DataTypes.STRING,
            defaultValue: "admin@admin.com"
        },
        gender:{
            type:DataTypes.STRING
        }
    },{
        tableName: "users", //change table name ourselves
        // timestamps:false, //remove timestamps i.e CreatedAt & UpdatedAt
        // updatedAt:false, //removes updatedAt Timestamp Only
        // createdAt:false,// removes createdAt Timestamp only
        createdAt : 'created_at', //renames the createdAt column to created_at
        updatedAt : 'updated_at', //renames the updatedAt Column to updated_at
        // engine: 'MYISAM', //Postgres Does not use engines so works only on MySQL
    });
}
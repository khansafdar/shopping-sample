const sequelize=require('sequelize')
const db=new sequelize({
    dialect:'sqlite',
    storage:__dirname +'/shopdb.db',
    host:'', 
    username:'',
    password:'',
    database:''
})
const User=db.define('users',{
id:{
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  

},
 name:{
     type:sequelize.STRING,
     allowNull:false
 }
})
const Product=db.define('products',{
    id:{
        type:sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    
    },
    name:{
      type:sequelize.STRING,
      allowNull:false
    },

    manufacturer:{
        type:sequelize.STRING
    },
    price:{
        type:sequelize.FLOAT,
        allowNull:false,
        defaultValue:0.0
    }
})
const Cart=db.define('carts',{
    id:{
        type:sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    
    },
    name:{
        type:sequelize.STRING,
        allowNull:false
      },
      username:{
        type:sequelize.STRING,
        allowNull:false 
      },
      manufacturer:{
        type:sequelize.STRING
    },
    price:{
        type:sequelize.FLOAT,
        allowNull:false,
        defaultValue:0.0
    }
})

db.sync()
.then(()=>console.log("database has been crated"))
.catch((err)=>console.log("error creating database"))

 exports = module.exports = {
    User,Product,Cart
}
const { DataTypes } = require("sequelize")
const db = require('../db/conn')
const User = require('./User')

const Address = db.define('Address', {
    street: {
        type: DataTypes.STRING,
        required: true
    },
    number: {
        type: DataTypes.STRING,
        required: true
    },
    city: {
        type: DataTypes.STRING,
        required: true
    }
})
//Relacionamentos do Sequelize = One-to-Many -> um para muitos
User.hasMany(Address) //user posui muitos endereços
Address.belongsTo(User)// endereço pertence ao user
module.exports = Address
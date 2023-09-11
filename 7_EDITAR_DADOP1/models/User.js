const {DataTypes }= require("sequelize")
//agora vamos importar a biblioteca do sequelize para formar uma DAtaTypes

const db = require('../db/conn')

//criar tabela no banco de dados
/**
 * CREATE TABLE user(
 * name VARCHAR(254) NOT NULL,
 * occupation(233) NOT NULL,
 * newsletter BOLL
 * );
 */
// agora as variaveís não recebem valores primitivos como texto,número,verdadeiro ou falso.
// ela tá recebendo coisa de banco de dados
const User = db.define('User',{
name: {
    type: DataTypes.STRING, //tipo de dado
    allowNull:false  // sua obrigatótiedade
},
occupation:{
    type: DataTypes.STRING,
    require:true
},
newsletter:{
    type: DataTypes.BOOLEAN,
  
}
})
module.exports= User

/**
 *esse metódo receber os parametros: user - nome da tabela do banco de dados e em sequida os campos que tera obj com o tipo e a regra dele
 */
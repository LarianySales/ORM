//importar sequelize
const {Sequelize }= require("sequelize")
//ele funciona com o padrão de orientação ao objeto
//no caso só queremos a parte de comunicação entre baco de dados por isoo as chaves

const sequelize = new Sequelize('nodesequelize2','aluno_medio','@lunoSenai23.',{
host:'127.0.0.1', //onde o banco de dados está disponível
port:3306,  //porta que o bd está disponível
dialect:'mysql' //identificação do banco relacional que tá usando

})
//ele vai ser construtor,precisando do nome do banco de dados, o nome do usuário,a senha do banco e um parametro direcionado ao banco de dados no caso um obj com as info do mysql
//o dialect diz o banco de dados que a pessoa tá usando,onde ele usa uns relacionais e mostra algumas opç~es,então vamos usar o mysql
module.exports= sequelize




//--------------------------histórico ------------------------------------------
// try{
//  sequelize.authenticate()
 //o authenticat vai fazer a comunicação com o banco de dados
//  console.log('Deu bom viu')
// }catch(error){
//  console.log(error)
// }
//------------------------------------------------------------------------------
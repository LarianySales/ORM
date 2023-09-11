//modulos
const express = require('express')
const app = express()
//importando o conn e user
const conn = require('./db/conn')
const user = require('./models/User')
//------handlebars
const exphbs = require('express-handlebars')
//porta
const port = 5666
//objeto json
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//engine -handlebars
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//milddleware
app.use(express.static('public'))

//ROTA PARA MOSTRAR O FORMULARIO
app.get('/users/create',(req,res)=>{
    return res.render('userAdd')
})
//ROTA PARA CADASTRAR AS INFORMAÇÕES DO FORMULÁRIO
app.post('/users/create',async(req,res)=>{
    const{name, occupation} = req.body
    let  newsletter = req.body.newsletter
    if(newsletter == 'on'){
        newsletter = true
    }else{
        newsletter = false
    }

    // console.log(name, occupation,newsletter)

await user.create({name, occupation,newsletter})// -----PROMISSE---
//O AWAIT SÓ EXISTE PELO FATO DE ASYNC - QUE PODE ELA DEMORA UM POUCO
//O AWAIT FAZ COM QUE A APLICAÇÃO NÃO ENTRE EM PANE ,ESPERANDO UMA TERMINA PARA SEGUIR PARA A SEGUINTE,MESMO QUE DEMORE .
//o create vem do sequelize para inserir coisa na tabelo, que tem ele e a conexão do banco de dados
// o user possui as info das tabelas 
//linha importante para fazer o cadastro-------------------------------------------------------------

    return res.redirect('/')
    //return res.STATUS(201).redirect('/')
    
})
//ROTAS 
app.get('/',async (req, res) => {

    const users = await user.findAll({raw:true})
    console.log(users)//lista os users cadastrados

    return res.render('home', {users})
})

//criar conexão com o bd
conn.sync().then(() => { // cria a tabela caso nao tenha a User
    app.listen(port, () => {
        console.log(`Servidor ${port}`)
    })
}).catch((err) => console.log(err))


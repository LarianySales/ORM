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

await user.create({name, occupation,newsletter})
    return res.redirect('/')
})
//ROTAS 
app.get('/', (req, res) => {
    return res.render('home')
})

//criar conexão com o bd
conn.sync().then(() => { // cria a tabela caso nao tenha a User
    app.listen(port, () => {
        console.log(`Servidor ${port}`)
    })
}).catch((err) => console.log(err))


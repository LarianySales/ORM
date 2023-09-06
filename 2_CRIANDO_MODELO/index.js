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


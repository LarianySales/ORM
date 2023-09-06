//modulos
const express = require('express')
const app = express()
//importando o conn

const conn = require('./db/conn')  
//------handlebars
const exphbs = require('express-handlebars')
//porta
const port = 5666
//objeto json
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//engine -handlebars
app.engine('handlebars',exphbs.engine())
app.set('view engine', 'handlebars')

//milddleware
app.use(express.static('public'))

//ROTAS 
app.get('/',(req,res)=>{
    return res.render('home')
})
app.listen(port,()=>{
    console.log(`Servidor ${port}`)
})
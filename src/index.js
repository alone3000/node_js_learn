// // commonjs statement
// let http = require('http') 

// modulejs statement import is used in production
// import http from 'http'

// let server = http.createServer((req,res)=>{
//  res.end("<h1 style='text-align:center;color:red;'>HI everyone,I am back</h1>")
// })

// server.listen(3000)




// Expressjs

import express from 'express'
import path from 'path'
// import { fileURLToPath } from 'url'

const app = express()

// // const __filename = fileURLToPath(import.meta.url)
// // const __dirname = path.dirname(__filename)

// //or

const __dirname = import.meta.dirname

//always focus on package.json file , for relative path not server file
app.use('/static',express.static('public'))
app.use('/assets',express.static('./src/assets'))

// console.log([__dirname,import.meta])

app.get('/',(req,res)=>{
 res.send("<h1 align='center'>welcome to express js</h1>")
})

app.get('/home',(req,res)=>{
    // console.log(path)
    res.sendFile(path.join(__dirname,'./views/index.html'))
})


app.post('/formdata',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/form.html'))
})

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'./views'))

app.get('/engine',(req,res)=>{
    res.render('home',{title:'home'})
})
app.get('/about',(req,res)=>{
    res.render('home',{title:'about'})
})
app.get('/contactus',(req,res)=>{
    res.render('home',{title:'Contact'})
})

app.listen(5000,(req,res)=>{
console.log("server listen on port 5000")
})
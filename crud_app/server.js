const express = require('express');
const dotenv = require('dotenv');
const morgan=require('morgan');
const app = express();
const bodyparser =require("body-parser")
const path =require("path");

dotenv.config({path:'config.env'})

 const PORT = process.env.PORT || 3001

 app.use(morgan('tiny'))

app.use(bodyparser.urlencoded({extended:true}))

app.set("view engine","ejs")
//app.set("views",path.resolve(__dirname,"views/ejs"))
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))


app.get('/',(req,res)=>{
    res.render("index");
})

app.get('/add_user',(req,res)=>{
    res.render('add_user');
})
app.get('/updata_user',(req,res)=>{
    res.render('updata_user');
})

app.listen(PORT,()=>{console.log(`server worck http://localhost:${PORT}`)});
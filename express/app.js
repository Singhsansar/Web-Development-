const express = require('express')
const path = require('path')
const app = express()
var handle = require('express-handlebars');
const { dirname } = require('path');
const port = 5100;

app.set('view engine', 'handlebars');

app.engine('handlebars',handle.create({
    layoutsDir:path.join(__dirname,'/views/layout')
}).engine)

//app.use(express.static(path.join(__dirname,'static')))
//app.use('/',require(path.join(__dirname,'routes/blog.js')))


app.get('/blogs',(req,res)=>
{
    console.log("error here")
    res.render('home')
    
})

app.get('/',(req,res)=>
{
   
    res.render()
})

app.get('/',(req,res)=>
{
    res.render()
})



app.listen(port,()=>
{
    console.log(`Blog app listening at http://localhost::${port}`)
})


















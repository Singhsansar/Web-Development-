const http = require('http');
// console.log(http)
// console.log(`hello singh ${http}`)

//req is incomming request and res is the response our server is sending 
//not 
const server = http.createServer((req,res)=>
{
    if(req.url==='/home')
    {
         res.end('welcome to ourhomepage')
    }
    if(req.url==='/')
    {
        res.end('Page is not avaliable')
    }  
    if (req.url==='/about')
    {
        res.end('hey its about page')
    }

    res.write(`<h1>Oops!</h1>
    <p>we didn't find the page</p>
    <a href="">goback</>`)
    res.end()
    // //this req is send to the browser on the port mentioned in server.listen(4500)
   
    // res.end()

})
server.listen(4500)
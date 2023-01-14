const express = require('express')
const apps = express()
const path = require('path')
const router = express.Router()
const blogs = require('../data/blogs')


//console.log(blogs)
router.get('/',(req,res)=>
{
  
    res.sendFile(path.join(__dirname,"../templetes/index.html"))
})

router.get('/blogs',(req,res)=>
{
    //res.sendFile(path.join(__dirname,"../data/blogs"))

    // blogs.array.forEach(element => {
    //     console.log(element.title)
        
    // });

    //console.log(path.join(__dirname,"../templetes/blogs.html"))    
    res.sendFile(path.join(__dirname,"../templetes/blogpage.html"))
})

//whenever the the req is to get the Blogs , slugs are the unique identifier 


router.get('/blogpost/:slug',(req,res)=>
{
    //filter will iterate throughthe blogs and show the output
    //filter(blogs) , blogs are the each element inside an array 
    //blogs.slug checking each  slug if it matches the requested slug

    myblog = blogs.filter((e)=> {
        //console.log(blogs.slug)
        //collect all the elements which returns true 
        return e.slug === req.params.slug;
   });


   console.log(myblog);

   //use this myblog into the html code 

    //console.log(path.join(__dirname,"../data/blogs.js"))
    //res.sendFile(path.join(__dirname,"../templetes/index.html"))
    res.sendFile(path.join(__dirname,"../templetes/blogpage.html"))
   
})

// router.get('/',(req,res)=>
// {
  
//     res.sendFile(path.join(__dirname,"../templetes/index.html"))
// })

module.exports=router
















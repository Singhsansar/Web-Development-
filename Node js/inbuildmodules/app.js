//use of call back function , error handing blockig code 
//doesnot block the ther code , next code is executed even witthout executing the previous codes , asynchronous approach 
console.log('starting here ')
const {readFile, writeFile} = require('fs')

//if code is outside the call back function it will give an error 
//error and result will be the calll back 
readFile('./inbuildmodules/write.txt','utf8',(err,result)=>
{
    if(err)
        {
            console.log('there is an error')
        }
    // console.log(result.toString('utf-8'))
    const first = readFile('./inbuildmodules/second.txt','utf8',(error2,result2)=>
    {
        if(error2)
        {
            console.log('There is an error in second')
        }

        const  finalresult = result2

        const write = writeFile('./inbuildmodules/write.txt',finalresult,(err,result)=>
    {
        {flag:'a'}
        if(err)
        {
        console.log('There is an Error')
        }
        console.log('done with this task')
    })

    }) 
})

console.log('starting with another task')

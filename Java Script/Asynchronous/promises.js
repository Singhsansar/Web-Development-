// setTimeout(function(){
//     console.log("Hii Mr. Singh")
// },3000);

const  promise = new Promise(function(resolve,reject){
    setTimeout(()=>{
        //resolve(100);
        reject(new Error("HI there have some Error"));
    },2000)
});

console.log(promise)


//to access resolve 
promise.then(function(result){
    console.log(result);
}).catch(function(err){
    console.log(err)//err.message will display message only 
})

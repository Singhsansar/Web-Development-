//Asynchronous programming 

console.log("Before")

function fetchUser()
{
    setTimeout(function(){ 
        alert('Hello its 2000 mili seconds') 
        return{
            name: 'Nikhil',
            age : 20,
            email :"kdark433@gmail.com"  }  
    
    },1000) 

  
    };


//unless you cannot get the timer completed you cannot fetch the data 
const userdata =fetchUser()
console.log(userdata) 

//set timeout
//will be called after 2000 milisecond, asynchronous block 
console.log('After')

//so if this problem is not going to be solved , then whenever we try to get data fromthe data base and if it's a little delay , then next code will be executed , leaving it as undefined 
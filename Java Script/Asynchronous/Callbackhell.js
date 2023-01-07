//Call back hell, sending email to the email address 

/*What is callback?


*/

//Expression type function so, can't be fetched from above
const fetchUser = function(userId,callback)
{
    setTimeout(function getuser()
    {
        console.log("hi my name is Sinfgh")
        const fetchuser =
        {
            id : userId,
            name: 'Singh',
            email:'singhking433@gmail.com',
        };
        callback(fetchuser)  // fetchuser  is above's fetchuser 
    },2000)

}

function sendmail(userEmail,callback){
    setTimeout(function(){
        console.log("message Sending")
        const response ={success:true}
        //return response;
        callback(response)

    },3000)
    
}


//callback function and parameter should be defined in the same id 
fetchUser(12345,function(user)
{
    console.log(user)
    console.log(sendmail(user.email,function(response){
        console.log(response)

    }))
})

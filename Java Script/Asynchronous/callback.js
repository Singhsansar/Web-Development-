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


fetchUser(12345,function(user)
{
    console.log(user)
})

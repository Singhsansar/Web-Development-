const user = 
{
    name: "Nikhil",
    age: 23,
    gender:"male",
    phone:73666979291,
    email:"singhsansar433@gmail.com",
}

// traversing through object  
// for (let x in user) 
// {
//  console.log(x ,":" ,user[x]);
// }

//2nd way 
console.log(Object.keys(user))
console.log(Object.values(user))
//java Script object 
let name = 'Kaji'
let age = 40 ;
let hobby = 'reading';

let user = 
{   name: 'kaji',
    age :40,
    ismarried: false,
    hobby : 'Reading',

    children:
    { child1: "sita",
      child2: "Rukmini",
    },
    
}
//Mainipulation of these objects 
user.email = "singhsansar433@gmail.com";
user['phone']= "47471956";
user.mobile = "741030330"

//update 
user.ismarried = true;
user.name = "Nikhil";
user.age = 23;

//delete some properties
delete user.children

console.log(user)
// console.log(user.name)
// console.log(user.children.child1)
// console.log(user.children.child2)



const user = 
{
    name: "Singh",
    age: 20,
};

// const copiedUser = {};
// copiedUser.name = user.name; 
// copiedUser.age = user.age; 
// console.log(copiedUser)

//loop method 
for(let key in user )
{
    console.log(key, user[key]);
    copiedUser[key] = user[key];
}

//object assign method user 
const copiedUser = Object.assign({},user)
console.log(copiedUser)
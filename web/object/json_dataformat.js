
//in json format we cannot 
const user = {
    'name' : "Nikhil",
    age : 20,

}
console.log(user)

//Object type to json type 
const jsonData =JSON.stringify(user);
console.log(jsonData)

//jsontype to object type 
console.log(JSON.parse(jsonData))

console.log()
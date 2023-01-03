//object Destracturing 
const user = 
{
    name: "Nikhil",
    age: 23,
    gender:"male",
    phone:73666979291,
    email:"singhsansar433@gmail.com",
    favbook: {
        bookname: "science",
        bookaurthor: "Nelson and parker"
    },
}
const{name,age,favbook} = user
console.log(name)
console.log(age)
//console.log(favbook.bookname)
// console.log(user.name)
// console.log(user.favbook)
// console.log(user.email)
// console.log(user.favbook.bookname)
// user.favbook.bookname to fetch booname 

const {bookname ,bookaurthor} = favbook;
console.log(bookname)
console.log(bookaurthor)
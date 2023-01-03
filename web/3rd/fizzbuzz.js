//fizz buzz

// let num = 15 ;

// if(num%3===0 && num%5===0)
// {
//     console.log("Fizzbuzz")
// }
// else if (num%5===0)
// {
//     console.log("Buzz");
// }
// else if(num%3===0)
// {
//     console.log("Fizz")
// }
// else
// {
//     console.log("nothing")//nothing 
// }


//fizz biuzz with terniary operator

num = 14;
console.log( num%3===0 && num%5===0
    ?"fizzbuzz"
    :num%3===0
    ?"fizz"
    :num%5===0
    ?"buzz"
    :"nothing" )
//variable name error in JS 
  //references error , variable not found 
let javaIsfun = true ; 
console.log(javaIsfun)

let country = 'India';
console.log(country.toUpperCase())

//data type error , boolean and integer , float can't be changed to uppercase 
let bool = true;
console.log(bool.toUpperCase())


console.log('hi aryan');


let pi = 3.1415594645;
console.log(pi.toFixed(2)) //range after the decimal point 




//throw custom throw message 
function div(a,b)
{
    if( b === 0 )
    {
        throw new Error("Second parameter can't be Zero"    );
        throw new SyntaxError("Second parameter can't be Zero"    );
    }
    return a/b;
}
console.log(div(4,3)) //Arithmetic error 


//Try ,catch , finally block 

try 
{
    console.log(div(4,0))
}
catch(e)
{
    console.log(e)
    console.log(e.name)//error name 
    console.log(e.message) //error message will be displayed 
}
finally
{
 console.log("Its work perfectly")
}
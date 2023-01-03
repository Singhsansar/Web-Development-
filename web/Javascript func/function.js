

//function declearation 
function aboutme()
{
    const message =` I am Singh and I am learnig something`;
    console.log(message)

}

function aboutme(name,abx)
{
    const message =` I am ${name} and I am ${abx} something`;
    console.log(message)

}

//function call 
aboutme()
aboutme("Nikhil","playing")

function sum(a,b,c)
{
    let x = a+b+c;
    return x;

}
console.log(sum(10,20,30))

//default parameters , if parameter is not passed it will take the default values as an input 
function sum(a=0,b=0,c=0)
{
    let x = a+b+c;
    return x;

}
console.log(sum(10,20,30))


//function as Expression 
const calsumexpression = function(num1,num2)
{
    return num+num2;
}

console.log(calsumexpression(100,200))


//function can be called from anywhere but the functionexpression can only be called after the next line of function definatioin 




//Arrow function , no need to write the function over there 
const calcum = (num1,num2)=>num1+num2; //after arrow part thing will be returned 
calcum(50,60)



//Rest parameters 
function multiply(number1,number2,number3)
{
    return number1*number2*number3
}
console.log(multiply(10,20,30));




//all the arguements will become arguements of array
function multiply(...args)
{
    console.log(args)
    let temp =1
    for(let x of args)
    {
        temp = temp*x;
    } 
    return remp
}
console.log(multiply(10,20,30));
//for loop
let x = 10 
for(let i = 0 ; i<=2;i++)
{
    console.log("for")
    console.log("loop")
}

//While loop
let y = 2;
while(y>0)
{
    console.log("while ")
    console.log("loop")
    y--;

}

//for in loop 
let arr =[100,200,300,400,500,600]

for( let m of arr)
{
    console.log(m)  //counting the number of elements 
}

let str = "I am a singh";

for(let a=0;a<=str.length ;a++)
{
    console.log(str[a])
}


//nested loop 
for (let i=0; i<=3;i++)
{
    for (let j=0; j<=3;j++)
    {
       
        console.log(i+j)

        //if no keys is pressed then continue , else break 

        // if(j = 10)
        // {
        //     continue;
        // }
    }

}
'use strict';

/*console.log(document.querySelector('.message').textContent);
 alert(document.querySelector('.message'))

can change the text content , even in the internal console 
document.querySelector('.message').textContent ='correct number';
*/

//text content will show you the textcontent 
document.querySelector('.number').textContent = 13; 
document.querySelector('.score').textContent=20;

//.value show you the value , set value of 23 there

/*document.querySelector('.check').addEventListener('click',()=>
{
    //alert(document.querySelector('.guess').value);
    //.values returned the text written in the text field ,

    //value is something , value that is given by the user 
    alert(document.querySelector('.guess').textContent);
})*/

document.querySelector('.check').addEventListener('click',function(){
    console.log(document.querySelector('.guess').value)
})
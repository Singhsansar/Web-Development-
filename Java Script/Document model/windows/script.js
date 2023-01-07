'use strict';

//Change class rather than just changing the css style 
/*
const btn =document.querySelectorAll('.show-modal').addEventListener('click',()=>{
    document.querySelector('.hidden').style.display = 'flexbox';
})
const model = document.querySelector('.close-modal').addEventListener('click',()=>
{

}) */

const btnCloseModal = document.querySelector('.close-modal')
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnsShowModel = document.querySelectorAll('.show-modal')
//for single query we don't need curly brasses 

const openmodel = () => {
    //console.log('Button Clicked')
    modal.classList.remove('hidden') //('hidden','','')
    overlay.classList.remove('hidden')}


for (let i = 0; i < btnsShowModel.length; i++) 
    btnsShowModel[i].addEventListener('click', openmodel)


// function close(){
//     modal.classList.add('hidden')
//     overlay.classList.add('hidden')}

//don't call function in the eventlistener just mention the name of the funtion
const close = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

//add a action to the close button as well 
btnCloseModal.addEventListener('click', close)

//when clicked outside the model , model window closes 
overlay.addEventListener('click', close)



//key handing in java-script
// document.addEventListener('keypress',close) 
//document.addEventListener('keyup',close) 

document.addEventListener('keydown',function(e)
{   
    
    if(e.key === 'Escape' && !modal.classList.contains('hidden'))
    {
        console.log(e.key)
        //check if class is present or not 
        close();
    }
    
    
})  
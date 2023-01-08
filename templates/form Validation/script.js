'use scrict';

//clear error fields when form is submited again 
function clearerror()
{
    let errors = document.getElementsByClassName('error');
    for (let item of errors)
    {
        item.innerHTML=''
    }


    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML ='';
    }
}

function seterror(name,error)
{
    const element= document.getElementById(name)
    element.getElementsByClassName('error')[0].innerHTML=`*${error}`    
    // element.querySelector('.error')[0].innerHTML=`*${error}`
}

function validateForm()
{
    clearerror();

    let returnval = true;
    var fname = document.forms['myform']['fname'].value;
    const email= document.forms['myform']['email'].value
    const address = document.forms['myform']['address'].value
    const age = document.forms['myform']['age'].value
    const number =document.forms['myform']['number'].value 

    obj.Name = fname 
    obj.Address= address
    obj.Email=email
    obj.Age =age
    obj.Mobile=number
    console.log(obj)

    if (fname.length<5)
    {
        seterror("name","Length of Name is too short ")
        returnval=false

    }  

    //Remaining Conditions to validate the form 
    return false
}

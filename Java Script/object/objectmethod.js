//object method and this keyword 
const user = 
{
    name : 'Nikhil',
    age : 23,
    ismarried: true,
    freinds:['jonson','prakash'],
    selector: null,
    calculateage: function(y)
    {
        //this keyword is used with in the object and class 
        console.log("calculate  is a method name"+y);
        console.log(this.age);
    }


};
user.calculateage();
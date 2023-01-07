//all the quaries can be replaces with the function 

// const secret = function()
// {
//     let secret = Math.trunc(Math.random() * (20 - 1) + 1)
//     return secret
// }

const secret_number = function()
{
    document.querySelector('.number').textContent = Math.trunc(Math.random() * (20 - 1) + 1);
}
const displymessage = function(message)
{
    document.querySelector('.message').textContent = message
}


//let secret = Math.trunc(Math.random() * (20 - 1) + 1)
let score = Number(document.querySelector('.score').textContent)
let Highscore = 0    ;


document.querySelector('.check').addEventListener
    ('click', () => {
        const guess = Number(document.querySelector('.guess').value);

        //when there is no input
        if (!guess) {
            //document.querySelector('.message').textContent = 'No number!®️'
            displymessage('No number!®️')

        }

        else if (guess === secret) {
            css()   
            //document.querySelector('.number').textContent = secret;
            secret_number()
            //document.querySelector('.message').textContent = 'Correct Number'
            document.querySelector('.score').textContent = ++score;
            high(score)
            //correct guess  time to change the number but the score and highest score will be same

        }

        else if (guess != secret) {
            // if( guess>secret)
            // {document.querySelector('.message').textContent = 'Too High';}
            // else
            // {
            //     document.querySelector('.message').textContent = 'Too Low';
            // }
            if (score >= 0) {
                
                document.querySelector('.message').textContent = guess>secret?'Too High!':'Two Low!';
                document.querySelector('.score').textContent = --score;
            }
            else {
                document.querySelector('.message').textContent = 'You Lost the Game';}

        }
        

        //document.querySelector('.guess').value = 0;
    })

function high(score) {
    let temp = Number(document.querySelector('.highscore').textContent);
    if (temp < score) {
        Highscore = score ;
        document.querySelector('.highscore').textContent = score
    }
}


    //manipulating css  using java script 

    
   function css()
   {
    //change background when player win
    //use style property , and don't forget camelcase and value must be string
    document.querySelector('body').style.backgroundColor='rgb(13, 209, 46)'
    document.querySelector('.number').style.width ='60rem'; 
   }

document.querySelector('.again').addEventListener('click',()=>
{
    score = 20; 
    secret = Math.trunc(Math.random() * (20 - 1) + 1)
    document.querySelector('.score').textContent    = score;
    //just don't change it to keep it same as before 
    //document.querySelector('.highscore').textContent    = Highscore;
    document.querySelector('.message').textContent = 'Starting Guessing';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor='#222'
    document.querySelector('.number').style.width ='15rem'; 

})



//refactoring tp get rid of duplicated codes 
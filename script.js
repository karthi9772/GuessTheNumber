'use strict';


let Score=20;
let Highscore=0;

    const RandomNumber=()=>{
        let Num=Math.ceil(Math.random()*20)
        return Num
    }


let number=RandomNumber()


document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value)
    console.log('Guess=',guess);

    if(Score>1){
        if(guess>number){
            document.querySelector('.message').textContent='Too High🤦‍♂️'
            Score-=1;
            document.querySelector('.score').textContent=Score;
        }
        else if(!guess){
            document.querySelector('.message').textContent='No Number⛔'

        }
        else if(guess<number){
            document.querySelector('.message').textContent='Too Low🤷‍♂️'
            Score-=1;
            document.querySelector('.score').textContent=Score;
        }
        else if (guess==number){
             document.querySelector('.message').textContent='Correct Number😉🎉'
                if(Score>Highscore){
                    Highscore=Score;
                    document.querySelector('.highscore').textContent=Highscore
                }

                document.querySelector('.number').textContent=number
                document.querySelector('body').style.backgroundColor='#60b347'
                document.querySelector('.number').style.width='30rem'
                document.querySelector('.message').style.fontSize='20px'
        }}
        else{
            document.querySelector('.message').textContent="YOU LOST...!!!"
             document.querySelector('body').style.backgroundColor='#fa8072'

        }
})


document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('.number').textContent='?'
    // console.log("You Clicked The Again Buttton")
    number=RandomNumber();
    document.querySelector('.score').textContent=20;
    document.querySelector('.message').textContent='Again...Guess The Number...!!!'
     document.querySelector('body').style.backgroundColor=' #020202'
     document.querySelector('.guess').value='';

});


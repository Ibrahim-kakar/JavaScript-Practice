const headOne = document.querySelector('.headone');
const headTwo = document.querySelector('.headtwo');
const btn = document.querySelector('button');


function gofortoss(paraReceive){
    const x = Math.ceil(Math.random(2)*2);

    console.log(x);

    if(x === 1){
        console.log('Congratulations, You Won The Toss.');

        headOne.innerHTML = paraReceive;
        headTwo.innerHTML = 'Congratulations, You Won The Toss.'
    }else{
        console.log('Sorry, You Loss The Toss.');

        headOne.innerHTML = paraReceive;
        headTwo.innerHTML = 'Sorry, You Loss The Toss.'
    }
}
/*
1-creo ciclo for da 1 a 100;
2-otilizzo operatore resto 
SE numero diviso 3 da resto 0 allora stampo Fizz
SE numero diviso 5 da resto 0 allora stampo Buzz
SE numero è multiplo sia di 3 che di 5 stampo FizzBuzz
*/


const container = document.querySelector('.container')
/*1-creo ciclo for da 1 a 100;*/

for(let i = 1; i <= 100; i++){
    let element;

   
    /*SE numero è multiplo sia di 3 che di 5 stampo FizzBuzz*/
    if((i % 3 == 0) && (i % 5 == 0 )){
        let word = 'FizzBuzz'
        container.innerHTML += "<div class='square square-fizzbuzz'>"+word+"<div>"
       console.log(i + word)
    }
    /*SE numero diviso 3 da resto 0 allora stampo Fizz*/ 
    else if (i % 3 == 0){
        let word = 'Fizz'
        container.innerHTML += "<div class='square square-fizz'>"+word+"<div>"
        console.log(i + word);
       

    }
    /**SE numero diviso 5 da resto 0 allora stampo Buzz */
    else if(i % 5 == 0){
        let word = 'Buzz'
        container.innerHTML += "<div class='square square-buzz'>"+word+"<div>"
        console.log(i + word);
        
    }
    else {
    
        container.innerHTML += "<div class='square square-common'>"+i+"<div>"
        console.log(i);
    }



    
}


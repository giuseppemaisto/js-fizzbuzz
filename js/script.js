/*
1-creo ciclo for da 1 a 100;
2-otilizzo operatore resto 
SE numero diviso 3 da resto 0 allora stampo Fizz
SE numero diviso 5 da resto 0 allora stampo Buzz
SE numero è multiplo sia di 3 che di 5 stampo FizzBuzz
*/


/*1-creo ciclo for da 1 a 100;*/

for(let i = 1; i <= 100; i++){

    if((i % 3 == 0) && (i % 5 == 0 )){
        console.log(i + ' FizzBuzz')
    }

    else if (i % 3 == 0){
        console.log(i + ' Fizz')

    }
}

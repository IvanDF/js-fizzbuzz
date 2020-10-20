/**
 * FizzBuzz
 * 
 * Scrivi un programma che stampi i numeri da 1 a 100,
 * ma per i multipli di 3 stampi "Fizz" al posto del numero e per i multipli di 5 stampi "Buzz".
 * Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz".

 */

var n = 0;

for ( i = 0; i < 100; i++ ) {

    n++
    
    if ( ( n % 3 == 0 ) && ( n % 5 == 0 ) ) {
        console.log('FizzBuzz');
    } else if ( n % 3 == 0 ) {
        console.log('Fizz');
    } else if ( n % 5 == 0)  {
        console.log('Buzz')
    }  else 
    console.log(n);
}
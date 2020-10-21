/**
 * FizzBuzz
 * 
 * Scrivi un programma che stampi i numeri da 1 a 100,
 * ma per i multipli di 3 stampi "Fizz" al posto del numero e per i multipli di 5 stampi "Buzz".
 * Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz".

 */

var list = ''
var lista = document.getElementById('lista')

// CICLO FOR

for ( i = 1; i <= 100; i++ ) {

    if ( ( i % 3 == 0 ) && ( i % 5 !== 0 ) ) {
        lista.innerHTML = list += '<li> <strong>' + 'Fizz' + '</strong> </li>'
        } else if ( ( i % 5 == 0 ) && ( i % 3 !== 0 ) )  {
        lista.innerHTML = list += '<li> <strong>' + 'Buzz' + '</strong> </li>'
        } else if ( ( i % 3 == 0 ) && ( i % 5 == 0 ) )  {
        lista.innerHTML = list += '<li> <strong>' + 'FizzBuzz' + '</strong> </li>'
        }  else {
            lista.innerHTML = list += '<li> <span>' + i + '</span> </li>'
        }
}


// var n = 0;

// CICLO WHILE

// while ( n < 100 ) {

//     n++

//     if ( ( n % 3 == 0 ) && ( n % 5 !== 0 ) ) {
//     lista.innerHTML = list += '<li> <strong>' + 'Fizz' + '</strong> </li>'
//     } else if ( ( n % 5 == 0 ) && ( n % 3 !== 0 ) )  {
//     lista.innerHTML = list += '<li> <strong>' + 'Buzz' + '</strong> </li>'
//     } else if ( ( n % 3 == 0 ) && ( n % 5 == 0 ) )  {
//     lista.innerHTML = list += '<li> <strong>' + 'FizzBuzz' + '</strong> </li>'
//     }  else {
//         lista.innerHTML = list += '<li> <span>' + n + '</span> </li>'
//     }

// }


// CICLO DO-WHILE

// do {
//     n++

//     if ( ( n % 3 == 0 ) && ( n % 5 !== 0 ) ) {
//     lista.innerHTML = list += '<li> <strong>' + 'Fizz' + '</strong> </li>'
//     } else if ( ( n % 5 == 0 ) && ( n % 3 !== 0 ) )  {
//     lista.innerHTML = list += '<li> <strong>' + 'Buzz' + '</strong> </li>'
//     } else if ( ( n % 3 == 0 ) && ( n % 5 == 0 ) )  {
//     lista.innerHTML = list += '<li> <strong>' + 'FizzBuzz' + '</strong> </li>'
//     }  else {
//         lista.innerHTML = list += '<li> <span>' + n + '</span> </li>'
//     }

// } while ( n < 100 )
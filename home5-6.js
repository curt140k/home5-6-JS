function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}

alert( factorial(3) );




function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

alert( fib(2) );




let a = +prompt('a?', '');
switch(a) {
    case 0:
        alert( 0 );
        break;
    case 1:
        alert( 1 );
        break;
    case 2:
    case 3:
        alert( '2,3' )
        break;
    default:
        alert( 'NO;(' )
        
}
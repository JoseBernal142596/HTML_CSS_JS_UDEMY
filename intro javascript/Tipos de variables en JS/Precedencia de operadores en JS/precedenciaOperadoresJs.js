let a = 3, b =2, c = 1, d= 4 ;

let k = a * b + c; //Las expresiones en JavaScript se leen de izquierda a derecha
console.log(k);

k = c + a * b; //En este caso, toma como prioridad el signo de multiplicación, sin embargo, se sigue evaluando de izquierda a derecha
console.log(k);

//En este ejemplo vemos que primero se hace la multiplicación, luego la división entre c y d, y por último la suma
k = a * b + c/d;
console.log(k);

//En este ejemplo vemos que primero se hace la multiplicación entre a y b, luego la división entre el resultado de la multiplicación y el divisor, y por último la suma
k = c + a * b /d;
console.log(k);

//También podemos modificar el orden de las operaciones utilizando paréntesis
// En este caso sería: primero la suma entre paréntesis, luego el resultado de esta multiplicado por b y por último la división
k = (c + a) * b / c;
console.log(k);



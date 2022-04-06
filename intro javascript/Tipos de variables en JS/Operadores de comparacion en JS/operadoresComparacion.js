/*El objetivo de los operadores de comparación es preguntar si dos valores son iguales o no
por lo que el resultado va a ser verdadero o falso */
                                                  
                                                 /*Operador == */

let a=3,b=2, c="3";
//El operador de asignación es = pero cuando estamos comparando, utilizamos ==
let z = a==c; //Estamos preguntando si a es igual a b mediante la variable z
//El operador == compara sin importar el tipo de valor de la variable
console.log(z);
                                                  /* Operador === */  
z = a ===c; //El operador de comparación ===  también es para preguntar si es igual y si mira el tipo del valor de la variable
console.log(z); 


                                                   /* Operador != */
let k = a!=c; /* El operador de comparación != quiere decir que es diferente de */
console.log(k);

k = a!==c; /*Para saber si es diferente teniendo en cuenta su tipo de variable, usamos !== */
console.log(k);
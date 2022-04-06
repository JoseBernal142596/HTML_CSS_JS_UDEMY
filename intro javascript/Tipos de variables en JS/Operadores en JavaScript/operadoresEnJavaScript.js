 /*Operador suma */
 let a =3, v=2;
 let z = a + v;
 console.log("Resultado de la suma es " + z);

 /*Operador resta */

 z = a - v;
 console.log("El resultado de su resta es " + z);
/*Operación de división */
 z= a/v;
 console.log("El resultado de su división es " +z);

/*Esta es la operación de módulo, que es el residuo de la división entre a y v */
 z = a % v;
 console.log("El módulo de la división es " + z);

 /*Operador de exponente */
 z = a**v;
 console.log("La potenciación entre a y v es " + z);


 /*Operadores de incremento y decremento */
                                                        //Incremento
       //  Pre-incremento (Operador ++ antes de la variable)
       //El pre-incremento significa que vamos a aumentar +1 el valor de una variable
       //En el pre-incremento primero se incrementa la variable antes de utilizarla
z= ++a;
console.log(a);
console.log(z);
       //Post-incremento (Operador ++ después de la variable)
       //En el post-incremento la variable se incrementa después de utilizarla

z= v++;
console.log(v);
console.log(z);

                                      //Decremento
//Pre-decremento 
/*El pre-decremento funciona igual al preincremento, entonces  la variable va a decrementar antes de ser utilizada
por lo que la variable a y z valía 4 y ahora valdrá 3 por lo que disminuye en 1 */
z= --a;
console.log(a);
console.log(z);

//Post-decremento
z = v--;
console.log(v);
console.log(z);
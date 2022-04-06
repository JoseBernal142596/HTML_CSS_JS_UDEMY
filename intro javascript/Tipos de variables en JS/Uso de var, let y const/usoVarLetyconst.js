/*Para decalar una variable se puede usar "var" pero hoy en día ya no es recomendado
por eso, para declarar una variable usamos let y const para declarar una constante */
/*En JavaScript podemos declarar una variable sin necesidad de utilizar palabras reservadas como var o let, Por ejemplo:*/
nombre = "Juan";
console.log(nombre);
/*Sin embargo, esto no es una buena práctica */

/*Una buena práctica es utilizar una palabra reservada (let), la variable y el resultado. Por ejemplo: */
let apellido = "Gonzáles";
console.log(apellido);

/*Otra forma de declarar una variable puede ser: */
let apellido1;
apellido1 = "Lopez"
console.log(apellido1);


/*Vamos a declarar una variable utilizando const */
/*En las variables const no es posible cambiar el valor del dato como se intentó en el siguiente comentario */
/*Es decir, cuando declaramos una variable con la palabra reservada (const), no podremos modificar o agregar otro valor */
const apellido2 = "Bernal";
/*apellido2= "Lara";*/
/*JavaScript es sensible a las mayusculas, es decir, no es lo mismo por ejemplo nombreCompleto y nombrecompleto o NombreCompleto */
let nombreCompleto = "Carlo Mesa";
let nombrecompleto ="Juan Camilo";
console.log(nombreCompleto);
console.log(nombrecompleto);

/*En JavaScript no podemos nombrar una variable colocando un numero al inicio, por ejemplo: */
/*let 1nombreCompleto = "Maria Camila";*/

/*Solo se permiten:*/

let _nombreCompleto = "Maria Camila";
let $NombreCompleto = "Luisa";

/*Tampoco se pueden usar palabras reservadas como if, false, for, etc. como nombre de una variable */
/*let break = 23;*/
/*Pero este es válido */
let break1 = 213;

/*Aunque es recomendable no utilizar este tipo de palabras para no confundirse */
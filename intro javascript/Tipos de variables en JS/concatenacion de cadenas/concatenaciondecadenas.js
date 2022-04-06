var nombre= 'Juan';
var apellido= 'Perez';
/*Para concatenar utilizamos el simbolo + y el espacio entre comillas sirve como espacio para separar el nombre 
y el apellido */
var NombreCompleto = nombre + ' '+ apellido;
console.log(NombreCompleto); 

/*Otra forma puede ser: */

var NombreCompleto2= "Carlos" + " " + "Gómez"; 
console.log(NombreCompleto2);

/*Concatenar numeros más cadenas*/

var x= nombre +  3455;
console.log(x); 

var t= apellido + 2+3+4;
console.log(t);

/*Si queremos que los valores se sumen, lo hacemos de la siguiente manera: */
var r= (64+26)+ NombreCompleto + (35+40);
console.log(r);

/*También funciona la suma de los numeros cuando la suma está antes de un string, de la siguiente manera */
/*Ya que si primero encuentra una cadena, todo lo interpretará como cadena pero si encuentra una operación primero
hará primero la operación y luego la concatenación */

var f= 35+95 + (NombreCompleto2);
console.log(f);
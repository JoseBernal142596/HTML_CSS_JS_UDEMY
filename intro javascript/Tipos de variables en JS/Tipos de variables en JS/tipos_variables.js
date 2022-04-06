//Dato tipo STRING 
/*Para un comentario largo, usamos*/
var nombre="Juan";
console.log(nombre);

//Dato tipo número
var edad="12"
console.log(edad);

//Tipo de dato objeto
var objeto ={ //nombre y apellido son propiedades del objeto, no se usa = sino :, para agregar otra propiedad usamos coma o cuando ya no queremos agregar mas no usamos la coma
    nombre : "Juan",   
    apellido : "Pelaez"
}

//para saber qué tipo es un dato, utilizamos typeof

edadF = 30;
console.log(typeof edadF);

//Tipo de dato booleano 
var bandera= true;
console.log(typeof bandera);


//Tipo de dato function
function mifuncion(){

}
console.log(mifuncion);

//Tipo de dato Symbol
var simbolo= Symbol("Mi simbolo");//Se usa para crear un valor único de una variable
console.log(simbolo);

//Tipo de dato clase
class persona{
 constructor(nombre, apellido){
    this.nombre = nombre;
   this.apellido = apellido;
 }
}
console.log(typeof persona);

/*Tipo de dato Undefined*/
var x;
console.log(typeof x);

/*Tipo null (ausencia de valor)*/ 
var y = null;
console.log(typeof y) 

var autos=['BMW, HYUNDAI, AUDI']
console.log(autos);
console.log(typeof autos);

/*Variable con valor de cadena vacía */

var z= '';
console.log(typeof z);
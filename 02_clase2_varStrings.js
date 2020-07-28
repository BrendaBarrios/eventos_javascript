var nombre = 'Brenda' , apellido = 'Barrios' ;

var nombreEnMayusculas = nombre.toUpperCase()
console.log(nombreEnMayusculas)

var nombreEnMinusculas = nombre.toLowerCase()
console.log(nombreEnMinusculas)

var primeraLetraDelNombre = nombre.charAt(0)

var cantidadLetrasNombre = nombre.length


/**
 * Interpolando texto se usa la comilla invertida
 */

 var nombreCompleto = `${nombre} ${apellido}`
 console.log(nombreCompleto);


var  str = nombre.charAt(1) + nombre.charAt(2)
console.log(str)

/**Uso de substr para quitar elementos */
var str1 = nombre.substr(1, 3)
console.log(str1)



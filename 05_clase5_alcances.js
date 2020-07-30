
// Variable global si se accede desde una función puede afectar otras cosas
var nombre = 'Brenda'


function imprimirNombreEnMayusculas(){
    nombre = nombre.toUpperCase()
    console.log(nombre)
}

imprimirNombreEnMayusculas()


// Ahora el resultado final  de la variable nombre ser BRENDA



function imprimirNombreEnMayusculas2(n){
    // Alcance local en la función de n
    n = n.toUpperCase()
    console.log(n)
}

imprimirNombreEnMayusculas2('Maria')
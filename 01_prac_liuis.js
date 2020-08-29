 

function nombreMayusculas(){
    test= 'Brenda'
    console.log(test)
}
var nombre = nombreMayusculas
 nombre() //puede poner parentesis porque se esta llamando a una funcion

 var otra = nombre
 otra()


 document.onkeyup = nombre //dar clic

  // function () {} referencia la misma funcion
  // 3 variables que referencian a la misma funcion


  // Asigno un objeto

  var objecto
  var objeto = {}
  

  var persona
  var persona = {nombre:{nombre:'Brenda',apaterno:'Barrios',apmaterno:'Beecerra',suma:function(){return 3+2}},edad:15,estatura:1.45,peso:60}

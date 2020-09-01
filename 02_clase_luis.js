
let suma = 0;
for (let i=0; i <= 100; i++) {
  suma += i;
}
console.log(suma);


//Imprimir la suma de pares

let par = 0;
for (let i=1; i < 100 ; i++){
  if (i%2 == 0){
    par += i     
  }
}
console.log(par)

// Encontrar el numero mayor
let nums = [91,58,75,49,68,15,46,98,100,22,20,28,5,76,60.36,42,25]


let mayor =nums[0] 
for (i = 0; i < nums.length; i++){
    
    if(  nums[i] > mayor){
        mayor = nums[i]
        
    }else if  (nums[i] < mayor) {
        mayor = mayor
    } 
}
console.log(mayor)


// pida un número y calcule su factorial 
//(El factorial de un número es el producto de todos los enteros entre 1 y el propio número y se representa 
//por el número seguido de un signo de exclamación. Por ejemplo 5! = 1x2x3x4x5=120),


function factorial(num){
    let resultado = 1;
    if (num == 0){
      return 1
    }
    for (i=1; i <= num; i++){
      resultado = resultado *i
    }

    return resultado
    
}

console.log(factorial(5))

//Algoritmo que pida números hasta que se introduzca un cero. 
//Debe imprimir la suma y la media de todos los números introducidos.
let suma = 0
let media = 0
let numero = 0

numero = prompt("Ingresa un numero")

if (numero == 0){
  console.log("SALISTE DEL PROGRAMA") 
}

  do{
    numero = prompt("Ingresa un numero")
    suma += numero
  }while (numero > 0)

media = suma / numero

console.log(suma)
console.log(media)


 // do{
   // suma += i
   // console.log("resultado" + suma)
  //} while (numero > 0)
 






//Realizar un algoritmo que pida números 
//(se pedirá por teclado la cantidad de números a introducir). 
//El programa debe informar de cuantos números introducidos son mayores que 0, menores que 0 e iguales a 0.

//Algoritmo que pida caracteres e imprima ‘VOCAL’ si son vocales y ‘NO VOCAL’ en caso contrario, el programa termina cuando se introduce un espacio.

//Escribir un programa que imprima todos los números pares entre dos números que se le pidan al usuario.

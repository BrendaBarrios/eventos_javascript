
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


// Crea una aplicación que pida un número y calcule su factorial 
//(El factorial de un número es el producto de todos los enteros entre 1 y el propio número y se representa 
//por el número seguido de un signo de exclamación. Por ejemplo 5! = 1x2x3x4x5=120),

function factorial(num){
    let resultado = 0;
    for (i=1; i <= num; i++){
        resultado += (num -1)*i
    }
    return resultado
}

factorial(5)
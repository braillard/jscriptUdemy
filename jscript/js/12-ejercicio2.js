'use strict'
/*
Utilizando un bucle, mostrar la suma y la media de los numeros introducidos hasta
introducir un numero negativo y ahí el resultado
*/

var suma = 0
var contador = 0

console.log("hola")

do{
    var numero = parseInt(prompt('Introduce numero hasta que pongas uno negativo', 0))

    if(isNaN(numero)){
        numero = 0
    }else if (numero >= 0){
        suma = suma + numero
        // suma += numero   (es lo mismo que arriba)

        contador++
    }

    console.log(suma)
    console.log(contador)

}while(numero >=0)

alert("la suma de todos los numero es: " + suma)
alert("la media de todos los numeros es: " + (suma/contador))

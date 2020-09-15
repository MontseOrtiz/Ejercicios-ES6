// Ejercicio 1 

// Crea una función llamada palindrome() que reciba como parámetro una oración, si la oración
// es un palíndromo la función deberá devolver true en otro caso, devolver false


const palindrome = frase => {
    const fraseSinEspacios = frase.replace(/ /g, "").toLowerCase()
    const invertirFrase = fraseSinEspacios => fraseSinEspacios.split("").reverse().join("")
    if (fraseSinEspacios === invertirFrase(fraseSinEspacios)) {
        return true
    } else {
        return false
    }
}

console.log("Ejercicio 1", palindrome("Anita lava la tina"))
console.log("Ejercicio 1", palindrome("Anita no lava la tina"))
console.log("Ejercicio 1", palindrome("Ana"))


// Ejercicio 2


// 2.-Crea una función llamada longestCountry(), esta función recibirá de parámetro un arreglo con
// nombres de distintos países, la función deberá retornar el país con mayor número de letras.

// Toma como ejemplo, del siguiente arreglo de países:

// const paises = ["México", "Panamá", "Guatemala", "El Salvador"]


const longestCountry = (...paises) => {

    let paisesLength = []

    for (let i = 0; i < paises.length; i++) {
        const element = paises[i].length;
        paisesLength.push(element)
    }

    const max = Math.max(...paisesLength)

    const indexMax = paisesLength.indexOf(max)

    const countryMax = paises[paisesLength.indexOf(max)]

    return countryMax

}

console.log("Ejercicio 2", longestCountry("México", "Panamá", "Guatemala", "El Salvador", "Guatemala"))
console.log("Ejercicio 2", longestCountry("México", "Panamá", "Guatemala", "El Salvador", "Argentina", "Gran Bretaña"))



// Ejercicio 3

// 3.-Crea una función llamada farenheitToCelsius() que reciba como
// parámetro los grados farenheit y los convierta a grados centígrados.


const farenheitToCelsius = number => (number - 32) * 5 / 9

console.log("Ejercicio 3", farenheitToCelsius(50))

// Ejercicio 4

// 4.-Cambia lo más que puedas a ES6 el reto de Piedra Papel y Tijeras


// alert("Hola jugaremos piedra, papel o tijeras")


// JUGADORES 

// let jugador1 = prompt("Jugador 1, por favor escriba una opción entre priedra, papel o tijeras")
// console.log("jugador 1", jugador1)

// let jugador2 = prompt("Jugador 2, por favor escriba una opción entre priedra, papel o tijeras")
// console.log("jugador 2", jugador2)


// DECISIONES


const piedraPapelTijera = (player1, player2) => {

    let jugador1 = player1.toLowerCase()
    let jugador2 = player2.toLowerCase()

    if (jugador1 == "piedra" && jugador2 == "piedra") {
        return ("Es un empate")
    } else if (jugador1 == "piedra" && jugador2 == "papel") {
        return ("Gana el Jugador 2")
    } else if (jugador1 == "piedra" && jugador2 == "tijeras") {
        return ("Gana el Jugador 1")
    } else if (jugador1 == "papel" && jugador2 == "piedra") {
        return ("Gana el Jugador 1")
    } else if (jugador1 == "papel" && jugador2 == "papel") {
        return ("Es un empate ")
    } else if (jugador1 == "papel" && jugador2 == "tijeras") {
        return ("Gana el Jugador 2")
    } else if (jugador1 == "tijeras" && jugador2 == "piedra") {
        return ("Gana el Jugador 2")
    } else if (jugador1 == "tijeras" && jugador2 == "papel") {
        return ("Gana el Jugador 1")
    } else if (jugador1 == "tijeras" && jugador2 == "tijeras") {
        return ("Es un empate ")
    }
}

console.log(piedraPapelTijera("TIJERAS", "piedra"))





// Ejercicio 5

// 5.-Crea una función que imprima el número de parámetros enviados.

// function numParametros(...parametros) {
//     return parametros.length
// }

const numParametros = (...parametros) => parametros.length

console.log("Ejercicio 5", numParametros(1, 2, 3, 4, 5, 6, 7, 8, 9))
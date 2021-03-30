// Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // nao passou o segundo parametro, entao o resultado foi not a number
imprimirSoma(2, 10, 4, 5, 6, 7, 8) // vai ignorar os demais termos
imprimirSoma()

// Funcao com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3)) //retornando o valor que a funçao retorna
console.log(soma(2)) // considerou que o segundo parametro é 1 já que nao passou ele
console.log(soma())
const peso1 = 1.1
const peso2 = Number('2.0') // Number serve pra inteiro e ponto flutuante, vai achar que 2.0 é int 2

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // essa função deixa escolher a quantidade de casas decimais
console.log(media.toString(2)) // vira string em binário

console.log(typeof media)
console.log(typeof Number)
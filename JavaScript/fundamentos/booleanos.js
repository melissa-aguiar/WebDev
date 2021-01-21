let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1 // isso é um número, e não um true. mas se analisar a lógica, 1 é true
console.log(!!isAtivo) // se colocar uma ! vai ser a negação, se colocar !! vai mostrar o resultado logico

console.log('os verdadeiros...') // todos inteiros são verdadeiros exceto zero
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'') // vazio é false, se tivesse um espaço era true
console.log(!!null)
console.log(!!NaN) // not a number é falso
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' ')) // usando ou, pelo menos um é verdade então é true

let nome = ''
console.log(nome || 'Desconhecido') // como o nome é vazio, retornou desconhecido

nome = 'Lucas'
console.log(nome || 'Desconhecido') // retornou o nome pq ele não é vazio
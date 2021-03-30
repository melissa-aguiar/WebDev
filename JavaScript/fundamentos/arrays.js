// agrupar varios valores de diferentes tipos em um identificador e acessar cada um pelo seu indice

const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length) // retorna o tamanho

valores.push({id: 3}, false, null, 'teste') // adicionou termos ao final
console.log(valores)

console.log(valores.pop()) // retirou o ultimo termo
delete valores[0] // deletou o valor de indice zero
console.log(valores)

console.log(typeof valores) // em js array é objeto
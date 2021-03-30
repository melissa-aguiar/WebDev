let valor // não inicializada, por isso undefined
console.log(valor)

valor = null // ausência de valor, nao aponta pra nenhum endereço de memoria
console.log(valor)
// console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco) //undefined pois ainda nao foi definido
console.log(produto) // objeto vazio

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco) //ver o booleano
// delete produto.preco // deletar pra o produto ser vazio
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)
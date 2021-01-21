const escola = "Cod3r"

console.log(escola.charAt(4)) //vai retornar a letra que está no indice 4 da string escola
console.log(escola.charAt(5)) // esse indice está fora da string, portanto retornou vazio
console.log(escola.charCodeAt(3)) // retorna o codigo do char que está no índice 3 da string
console.log(escola.indexOf('3'))

console.log(escola.substring(1)) // pega a substring a partir do indice 1 ate o final
console.log(escola.substring(0, 3)) // pega a substring a partir do indice 0 ate o 3 sem incluir o 3

console.log('Escola '.concat(escola).concat("!")) // concatenou com a const e com a string !
console.log('Escola ' + escola + "!") // concatenou com a const e com a string !
console.log(escola.replace(3, 'e')) // substituiu o caracter de indice 3

console.log('Ana,Maria,Pedro'.split(',')) // converteu pra array e separou por vírgula
// a função gets() é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print() para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar
function powDio() {
	
	let lines = 4

	let line = [6,6,6,6]
	let soma = 0
	
	for( let i = 0; i<line.length; i++){
	  let transfor = parseInt(line[i])
	  soma = soma + transfor
	}
	console.log(soma-3)

}

console.log("powDio(6)");
console.log(powDio());




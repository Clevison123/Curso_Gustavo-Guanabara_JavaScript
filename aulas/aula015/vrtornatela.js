let valores = [8, 1, 7, 4, 2, 9, 5, 3, 6, 0]
valores.sort()
//console.log(valores)

/*
console.log(valores(0))
console.log(valores(1))
console.log(valores(2))
console.log(valores(3))
console.log(valores(4))
console.log(valores(5))
console.log(valores(6))
console.log(valores(7))
console.log(valores(8))
console.log(valores(9))

for(let pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/
for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
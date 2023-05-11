let num = [9, 3, 7, , 5, 1]
num[3] = 6
num.push(2)
num.length
num.sort()
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor é ${num[0]}`)

let pos = num.indexOf(5)
console.log(`O valor 5 está na posição ${pos}`)
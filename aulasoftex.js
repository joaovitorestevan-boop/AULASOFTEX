let readline = require('readline-sync')

let nome = readline.question ("qual é o seu nome?")

switch(nome) {
    case "joão":
    console.log("o seu nome é joão")
    break;
    case "João":

console.log("eu to aqui")
break;
case "JOAO":
console.log("EU TO AQUI")
break;
default:
    console.log("nao conheço")

}
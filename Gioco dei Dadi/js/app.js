// creare dado per utente
let userDice = parseInt ( Math.floor(Math.random() *7))
// creare dado per la macchina
let masterDice = parseInt ( Math.floor(Math.random() *7))

console.log (userDice, masterDice)

// dadi a confronto

if (userDice > masterDice) {
    console.log ('YOU ARE THE DICE KING!!!!')
} 

if (userDice == masterDice) {
    console.log ('YOU CAN DO BETTER!')
}

if (userDice < masterDice) {
    console.log ('YOU JUST A MISERABLE PEASENT...')
}
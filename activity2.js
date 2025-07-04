const prompt = require('prompt-sync')(); 
const maxLimit = parseInt(prompt("Enter the Limit of the Double Loop: "));

console.log("Result:");

for (let i = 0; i <= maxLimit; i++) {
    for (let j = 0; j <= maxLimit; j++) {
        const sum = i + j;
        console.log(`[${i}] [${j}] Added value is ${sum}`);
    }
}

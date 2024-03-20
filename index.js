const readline = require('readline');
function sum(a,b){
    return a + b;
}
function subtarction(a,b){
    return a - b;
}
function multiply(a,b){
    return a * b;
}
function divide(a,b){
    return a / b;
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter A: ', (answerA) => {
    rl.question('Enter B: ', (answerB) => {
        const a = parseInt(answerA);
        const b = parseInt(answerB);
        console.log(sum(a, b));
        console.log(subtarction(a,b));
        console.log(multiply(a,b));
        console.log(divide(a,b));
        rl.close();
    });
});
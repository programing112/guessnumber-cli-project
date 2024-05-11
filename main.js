#!
import inquirer from "inquirer";
import chalk from "chalk";
console.log("guess Number 1 to 10");
let ramdomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "play a game guessNumber",
    },
]);
if (answer.userGuessNumber === ramdomNumber) {
    console.log(chalk.green("congtratulation! you gussed right number."));
}
else {
    console.log(chalk.red("you guessed wrong Number"));
}

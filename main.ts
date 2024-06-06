#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
console.log("==========================================");
console.log("Wellcome to CODE WITH FAJUR Adventure Quiz ");
console.log("==========================================");

let marksGain = 0;
let marksLose = 0;

let Q1 = await inquirer.prompt(
    [
        {
            name:"answer",
            type:"list",
            message:chalk.yellowBright("Q1.What is Typescript?"),
            choices:[
                chalk.magenta.bold("1. Superset of Javascript"),
                chalk.magenta.bold("2. Alternative of Python"),
                chalk.magenta.bold("3. Database Management System")
            ]
        }
    ]
);
let ans1 = Q1.answer;
switch(ans1){
    case chalk.magenta.bold("1. Superset of Javascript"):
        console.log(chalk.green.bold("Correct Answer"));
        marksGain++;
        break;
        default:
            console.log(chalk.red.bold("Wrong Answer"));
            marksLose--;
}

let Q2 = await inquirer.prompt(
    [
        {
            name:"answer",
            type:"list",
            message:chalk.yellowBright("Q2. Which command is used to make package.json file?"),
            choices:[
                chalk.magenta.bold("1. tsc --init"),
                chalk.magenta.bold("2. npm fund"),
                chalk.magenta.bold("3. npm init -y")
            ]
        }
    ]
);

let ans2 = Q2.answer;
switch (ans2){
     case chalk.magenta.bold("3. npm init -y"):
        console.log(chalk.green.bold("Correct Answer"));
        marksGain++;
        break;
        default:
            console.log(chalk.red.bold("Wrong Answer"));
            marksLose--;
}

let Q3 = await inquirer.prompt(
    [
        {
          name:"answer" ,
          type :"list",
          message:chalk.yellowBright("Q3. Predefined arrays are known as??"),
          choices:[
            chalk.magenta.bold("1. interfaces"),
            chalk.magenta.bold("2. objects"),
            chalk.magenta.bold("3. tuples")
          ]
        }
    ]
);

let ans3 = Q3.answer;
switch (ans3){
      case chalk.magenta.bold("3. tuples"):
        console.log(chalk.green.bold("Correct Answer"));
        marksGain++;
        break;
        default:
            console.log(chalk.red.bold("Wrong Answer"));
            marksLose--;
}

let Q4 = await inquirer.prompt(
    [
        {
            name:"answer",
            type:"list",
            message:chalk.yellowBright("Q4. What is the symbol of OR operator?"),
            choices:[
                chalk.magenta.bold("1. &&"),
                chalk.magenta.bold("2. ||"),
                chalk.magenta.bold("3. !=")
            ]
        }
    ]
);

let ans4= Q4.answer;
switch(ans4){
    case chalk.magenta.bold("2. ||"):
        console.log(chalk.green.bold("Correct Answer"));
        marksGain++;
        break;
        default:
            console.log(chalk.red.bold("Wrong Answer"));
            marksLose--;
}

let Q5 = await inquirer.prompt(
    [
        {
            name:"answer",
            type:"list",
            message:chalk.yellowBright("Q5. What are unary operators used for?"),
            choices:[
                chalk.magenta.bold("1. to compare"),
                chalk.magenta.bold("2. to assign"),
                chalk.magenta.bold("3. pre/post increment and pre/post decrement")
            ]
        }
    ]
);

let ans5 = Q5.answer;
switch(ans5){
    case chalk.magenta.bold("3. pre/post increment and pre/post decrement"):
        console.log(chalk.green.bold("Correct Answer"));
        marksGain++;
        break;
        default:
            console.log(chalk.red.bold("Wrong Answer"));
            marksLose--;
}

console.log(chalk.blueBright.bold(`No. of Correct Answers = ${marksGain}`));
console.log(chalk.blueBright.bold(`No. of Wrong Answers = ${marksLose *-1 }`));

if (marksGain > marksLose* -1){
    console.log(chalk.greenBright.bold("Congratulations ! You Won The Adventure Quiz"));
}
else{
    console.log(chalk.redBright.bold("OOPS ! You Lost The Adventure Quiz"));
}




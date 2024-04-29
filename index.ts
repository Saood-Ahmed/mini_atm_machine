import inquirer from 'inquirer';

// Initializing Balance & Pin Code
let myBalance = 10000;
let pinCode = 12345;

//Print Welcome Message
console.log("Welcome to Code With Saood! - ATM Machine");

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter Your Pincode:"
    }
])
if (pinAnswer.pin === pinCode) {
    console.log("Pincode Correct! Successful Login!");

    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an Operation:",
            choices: ["Withdraw Amount", "Check Balance"]
        }
    ])

    if(operationAnswer.operation === "Withdraw Amount"){
        let amountAnswer = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to withdraw:"
            }
        ])
        if(amountAnswer.amount > myBalance) {
            console.log("Insufficient Balance!");
        }
        else {
            myBalance -= amountAnswer.amount;
            console.log(`${amountAnswer.amount} Withdraw Successfully!`);
            console.log(`Your Remaining Balance is: ${myBalance}`);
        }
    } else if (operationAnswer.operation === "Check Balance") {
        console.log(`Your Account Balance is: ${myBalance}`);
    }    
}

else {
    console.log("Pin is incorrect! Try Again!")
}

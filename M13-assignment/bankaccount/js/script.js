var depositAmount = 0;
var withdrawalAmount = 0;
var currentBalance = 0;

function enterName() {
    var userName = prompt("Enter your name:");
    document.getElementById("userName").innerText = "User: " + userName;
}

function makeDeposit() {
    depositAmount = parseFloat(prompt("Enter the amount to deposit:"));
    document.getElementById("Deposit").innerText = "Deposit: $" + depositAmount.toFixed(2);
    calculateBalance();
}

function makeWithdrawal() {
    withdrawalAmount = parseFloat(prompt("Enter the amount to withdraw:"));
    document.getElementById("Withdrawal").innerText = "Withdraw: $" + withdrawalAmount.toFixed(2);
    calculateBalance();
}

function calculateBalance() {
    currentBalance = depositAmount - withdrawalAmount;
    document.getElementById("balance").innerText = "Balance: $" + currentBalance.toFixed(2);
}

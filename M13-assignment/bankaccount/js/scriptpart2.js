alert("Please see all information on console ")
function bankAccount(ownerName) {
    var balance = 0;
    // var owner=ownerName

    return {
         deposit: function(depositAmount) {
            if (depositAmount > 0) {
                balance += depositAmount;
                return "Deposited $" + depositAmount.toFixed(2);
            }
            else{
                alert('invalid')
            }
        },
        withdraw: function(withdrawalAmount) {
            if (withdrawalAmount > 0 && withdrawalAmount <= balance) {
                balance -= withdrawalAmount;
                return "Withdrawn $" + withdrawalAmount.toFixed(2);
            } 
            else{
                alert('invalid')
            }
        },
        getBalance: function() {
            return "Balance: $" + balance.toFixed(2);
        },
        getOwnerName: function() {
            return "Owner: " + ownerName;
        }
    };
}

var userAccount = bankAccount("zak");
console.log(userAccount.getOwnerName())
console.log(userAccount.deposit(100)); // Output: Deposited $100.00


console.log(userAccount.withdraw(50));  // Output: Withdrawn $50.00
console.log(userAccount.getBalance());  // Output: Balance: $50.00

  
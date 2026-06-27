import input from "analiza-sync";
import { getCustomersManager } from "./customersManager.js";
import { createCustomer, searchCustomer, showCustomers } from "./customer.js";
import { closeAccount, deposit, withdraw } from "./account.js";
import { showStatistics } from "./stats.js";

export const manager = getCustomersManager();
let choice;
do {
    showMenu();
    choice = input("Please enter your choice:\n");
    switch (choice) {
        case "1":
            createCustomer();
            break;
        case "2":
            showCustomers();
            break;
        case "3":
            deposit();
            break;
        case "4":
            withdraw();
            break;
        case "5":
            searchCustomer();
            break;
        case "6":
            closeAccount();
            break;
        case "7":
            showStatistics();
            break;
        case "8":
            console.log("Goodbye");
            break;
        default:
            console.log("Invalid choice");
    }
    input("Press Enter to continue...")
} while (choice !== "8");

function showMenu() {
    console.log(`\t=== Bank ===
    1. Create Customer.
    2. Show Customers.
    3. Deposit.
    4. Withdraw.
    5. Search Customer.
    6. Close Account.
    7. Show Statistics
    8. Exit.
        `);
}

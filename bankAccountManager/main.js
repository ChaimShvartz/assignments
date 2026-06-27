import input from "analiza-sync";
import { getCustomersManager } from "./customersManager.js";
import { createCustomer, searchCustomer, showCustomers } from "./customer.js";
import { closeAccount, deposit, withdraw } from "./account.js";

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
            console.log("Goodbye");
            break;
        default:
            console.log("Invalid choice");
    }
    input("Press Enter to continue...")
} while (choice !== "7");

function showMenu() {
    console.log(`\t=== Bank ===
    1. Create customer.
    2. Show customers.
    3. Deposit.
    4. Withdraw.
    5. Search customer.
    6. Close account.
    7. Exit.
        `);
}

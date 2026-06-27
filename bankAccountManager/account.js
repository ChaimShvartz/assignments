import input from "analiza-sync";
import { manager } from "./main.js";
import { getNumber, getString } from "./utils.js";
import { getCustomer } from "./customer.js";

export function deposit() {
    try {
        const customer = getCustomer();
        if (!customer.isActive) throw new Error("Inactive customer");

        const amount = getNumber("amount");

        customer.deposit(amount);
        console.log("Deposit completed successfully");
    } catch (err) {
        console.log("Deposit failed: " + err.message);
    }
}

export function withdraw() {
    try {
        const customer = getCustomer();
        if (!customer.isActive) throw new Error("Inactive customer");

        const amount = getNumber("amount");
        if (amount > customer.balance) throw new Error("insufficient balance");

        customer.withdraw(amount);
        console.log("Withdraw completed successfully");
    } catch (err) {
        console.log("Withdraw failed: " + err.message);
    }
}

export function closeAccount() {
    try {
        const customer = getCustomer();
        if (!customer.isActive) throw new Error("Account is close already");

        customer.close();
        console.log("Closing completed successfully");
    } catch (err) {
        console.log("Closing failed: " + err.message);
    }
}

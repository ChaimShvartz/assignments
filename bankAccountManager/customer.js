import input from "analiza-sync";
import { manager } from "./main.js";
import { getNumber, getString, getAccountType } from "./utils.js";

export function createCustomer() {
    try {
        const name = getString();
        const balance = getNumber("balance", false);
        const accountType = getAccountType();

        const id = manager.createCustomer(name, accountType, balance);
        console.log(`Customer created successfully(ID = ${id})`);
    } catch (err) {
        console.log(err.message);
    }
}

export function showCustomers() {
    manager.showCustomers();
}

export function searchCustomer() {
    const customerKey = input("Enter ID / name to search for:\n").trim();
    if (customerKey === "") {
        console.log("Missed customer key");
        return;
    }
    let customer;
    if (Number.isNaN(Number(customerKey)))
        customer = manager.searchCustomerByName(customerKey.toLowerCase());
    else customer = manager.searchCustomerByID(Number(customerKey));
    console.log(customer || "Customer not found");
}

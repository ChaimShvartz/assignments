import input from 'analiza-sync';
import { getCreateCustomer, verifyCustomerDetailes } from "./customer.js";

const creater = getCreateCustomer();

function createCustomer() {
    const name = input('Name:\n').trim();
    const accountType = input('Type:\n').trim().toLowerCase();
    const balance = input('Balance:\n').trim();
    try {
        verifyCustomerDetailes(name, accountType, balance);
        return creater(name, accountType, + balance);
    } catch(err) {
        console.log(err.message);
    }
}

// const customer = createCustomer()
// customer.close();
// console.log(customer);

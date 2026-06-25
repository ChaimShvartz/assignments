export function getCreateCustomer() {
    let id = 1;
    const proto = {
        deposit: function (amount) {
            this.balance += amount;
        } ,
        withdraw: function (amount) {
            if (amount > this.balance)
                throw new Error("Amount must be positive");
            this.balance -= amount;
        },
        close: function () {
            this.isActive = false;
        }
    }
    return function (fullName, accountType, balance) {
        const customer =  {
            id: id++,
            fullName: fullName.trim(),
            accountType: accountType.trim().toLowerCase(),
            balance,
            isActive: true
        }
        Object.setPrototypeOf(customer, proto);
        console.log('Customer created successfully');
        return customer;
    }
}

export function verifyCustomerDetailes(name, accountType, balance) {
    if (!name)
        throw new Error("missed name");
    if (balance === '')
        throw new Error("missed balance");
    if (+ balance < 0) 
        throw new Error("Balance must be non-negative"); 
    if (!(['regular', 'premium', 'student'].includes(accountType)))
        throw new Error("invalid account type");
}

function showCustomers(customers) {
    for (const customer of customers)
        console.log(customer);
}

function searchCustomerByID(customers, id) {
    return customers.find(customer => customer.id === id);
}

function searchCustomerByName(customers, name) {
    const clearName = name.trim().toLowerCase();
    return customers.find(customer => customer.fullName.toLowerCase() === clearName);
}

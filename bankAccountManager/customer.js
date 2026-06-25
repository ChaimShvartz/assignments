function getCreateCustomer() {
    let id = 1;
    return function (fullName, accountType, balance) {
        verifyDetailes(fullName.trim(), accountType.trim(), balance)
        const customer =  {
            id: id++,
            fullName: fullName.trim(),
            accountType: accountType.trim().toLowerCase(),
            balance,
            isActive: true
        }
        console.log('Customer created successfully');
        return customer;
    }
}

function verifyDetailes(name, accountType, balance) {
    if (!name)
        throw new Error("missed name");
    if (balance === undefined)
        throw new Error("missed balance");
    if (balance < 0) 
        throw new Error("Balance must be non-negative"); 
    if (!(['regular', 'premium', 'student'].includes(accountType.toLowerCase())))
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

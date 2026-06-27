export function getCustomersManager() {
    function createCustomer() {
        const proto = {
            deposit: function (amount) {
                this.balance += amount;
            },
            withdraw: function (amount) {
                this.balance -= amount;
            },
            close: function () {
                this.isActive = false;
            },
        };
        let id = 1;
        return function (fullName, accountType, balance) {
            const customer = {
                id,
                fullName,
                accountType,
                balance,
                isActive: true,
            };
            Object.setPrototypeOf(customer, proto);
            customers.push(customer);
            return id++;
        };
    }

    const customers = [];
    return {
        createCustomer: createCustomer(),
        showCustomers: function () {
            if (customers.length === 0) {
                console.log("There are not customers yet");
                return;
            }
            console.log(customers);
        },
        searchCustomerByID: function (id) {
            return customers.find((customer) => customer.id === id);
        },
        searchCustomerByName: function (name) {
            return customers.find(
                (customer) => customer.fullName.toLowerCase() === name,
            );
        },
        getCustomers: () => customers,
    };
}

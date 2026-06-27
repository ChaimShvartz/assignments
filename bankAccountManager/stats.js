import { countActiveAccounts, countCustomers, countTotalMoney, getHighestBalance } from "./customer.js";

export function showStatistics() {
    const totalCustomers = countCustomers();
    const totalMoney = countTotalMoney();

    const stats = {
        "Total Customers": totalCustomers,
        "Active Accounts": countActiveAccounts(),
        "Total Money": totalMoney,
        "Average Balance": Math.round((totalMoney / totalCustomers) || 0),
        "Highest Balance": getHighestBalance(),
    }

    console.log("\t=== Statistics ===");
    for (const field of Object.keys(stats))
        console.log(field + ": " + stats[field]);
}
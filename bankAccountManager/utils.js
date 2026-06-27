import input from "analiza-sync";

export function getNumber(field, positive = true) {
    let userInput = input(field + ":\n").trim();
    if (userInput === "") throw new Error("Missed " + field);

    userInput = Number(userInput);
    if (Number.isNaN(userInput)) throw new Error(`${field} must be a number`);

    if (positive) {
        if (userInput <= 0)
            throw new Error(`${field} must be a positive number`);
    } else {
        if (userInput < 0)
            throw new Error(`${field} must be a non-negative number`);
    }
    return userInput;
}

export function getString(field = "name") {
    const userInput = input(field + ":\n").trim();
    if (userInput === "") throw new Error("Missed " + field);
    return userInput;
}

// 1
const createLogger = () => () => {
    console.log("Hello");
};
const logger = createLogger();
// logger();
// logger();
// logger();

// 2
function createGreeting() {
    return (name) => {
        console.log(`Hello ${name}`);
    };
}
const greeting = createGreeting();
// greeting("Chaim");
// greeting("Yair");
// greeting("Moshe");

// 3
const createCounter = () => {
    let i = 0;
    return () => i++;
};
const counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

// 5
const createMultiplier = (x) => (number) => number * x;
// const double = createMultiplier(2);
// console.log(double(4));
// console.log(double(-4));
// console.log(double(0));
// const triple = createMultiplier(3);
// console.log(triple(4));
// console.log(triple(-4));
// console.log(triple(0));

// 6
const createAdder = (a) => (b) => a + b;
const add5 = createAdder(5);
const add2 = createAdder(2);
// console.log(add2(5));
// console.log(add5(5));

// 7
const createSecret = () => {
    let secret;
    return {
        getSecret: () => secret,
        setSecret: (value) => {
            secret = value;
        }
    };
};
// const {getSecret, setSecret} = createSecret();
// console.log(getSecret());
// setSecret(10);
// console.log(getSecret());
// setSecret('g');
// console.log(getSecret());

// 8
const sayHello = () => {
    console.log('Hello');
}

const once = (fn) => {
    let hasRun = false;
    return () => {
        if (!hasRun) {
            fn();
            hasRun = true;
        }
    }
}
// const performer = once(sayHello);
// performer();
// performer();
// performer();

// 12
// function createStack () {
//     const stack = [];
//     return {
//         push: (value) => {
//             stack.push(value);
//         },
//         pop: () => stack.pop(),
//         peek: () => stack[stack.length - 1]
//     }
// }
// const stack = createStack();
// console.log(stack.peek());
// stack.push(5);
// stack.push(25);
// console.log(stack.pop());
// console.log(stack.peek());

// 13
// function createGenerator () {
//     let id = 1;
//     return () => id++;
// }
// const gen = createGenerator();
// console.log(gen());
// console.log(gen());
// console.log(gen());

// 15
// function createBankAccount (initialBalance) {
//     let balance = initialBalance;
//     return {
//         getBalance: () => balance,
//         deposit: function (amount) {
//             balance += amount;
//         },
//         withdraw: function (amount) {
//             if (amount <= balance)
//                 balance -= amount;
//         }
//     }
// }
// const acount = createBankAccount(1000);
// acount.deposit(200);
// acount.withdraw(12000);
// console.log(acount.getBalance());

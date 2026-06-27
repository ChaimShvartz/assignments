// 1
// function getObject(name) {
//     return { name };
// }
// const obj = getObject("Chaim");

// 2
// obj.greet = function() {
//     return `Hi, I'm ${this.name}`
//     }

// console.log(obj.greet());

// 3
// const obj1 = getObject('Yair');
// const obj2 = getObject('Chaim');
// obj1.name = 'Moshe';
// console.log(obj2);

// 4
// function getObject(name, age) {
//     return { name, age };
// }
// const obj = getObject("Chaim", 2);
// console.log(obj);

// 5
// function greatThan18() {
//     return this.age > 18;
// }

// function getObject(name, age) {
//     return {name, age, greatThan18}
// }
// const obj = getObject("Chaim", 2);
// console.log(obj.greatThan18());

// 6
// const count = () => {
//     let counter = 1;
//     return () => counter++;
// };
// const counter = count();
// console.log(counter());
// console.log(counter());
// console.log(counter());


// 7 
// const getCounter = () => {
//     let counter = 0;
//     return () => ++counter;
// };
// const counter2 = getCounter();
// console.log(counter2());
// console.log(counter2());
// console.log(counter2());

// 8
// function getCounter(n) {
//     let count = n;
//     return () => ++n;
// };
// const counter2 = getCounter(10);
// console.log(counter2());
// console.log(counter2());
// console.log(counter2());

// 9 - 10
// function getCounter(n) {
//     let count = n;
//     return {
//         increment: () => ++count,
//         decrement: () => --count,
//         count: () => count
//     }
// };
// const counter2 = getCounter(10);
// console.log(counter2.count());
// console.log(counter2.increment());
// console.log(counter2.decrement());


// 11
// function getCounter() {
//     let count = 1;
//     return {
//         counter: () => count,
//         increment: () => count++
//     }
// };
// const objCounter = getCounter();
// console.log(objCounter.counter());
// console.log(objCounter.increment());
// console.log(objCounter.counter());

// 12
// console.log(count);

// 13
// function getCounter() {
//     let count = 1;
//     return {
//         counter: () => count,
//         increment: () => count++,
//         reset: () => {
//             count = 0;
//         }
//     }
// };
// const objCounter = getCounter();
// console.log(objCounter.counter());
// objCounter.increment();
// console.log(objCounter.counter());
// objCounter.reset();
// console.log(objCounter.counter());
// objCounter.increment();
// console.log(objCounter.counter());

// 14
// const objCounter1 = getCounter();
// const objCounter2 = getCounter();

// objCounter1.increment();
// console.log(objCounter1.counter());
// console.log(objCounter2.counter());

// 15
// const getItem = (name, price, stock) => ({name, price, stock});

// const item1 = getItem('milk', 5, 10);
// console.log(item1);

// 16
// function getItem(name, price, stock){
//     return {
//     name,
//     price,
//     stock,
//     inStock: () => stock > 0
//     }
// };

// const item1 = getItem('milk', 5, 10);
// console.log(item1.inStock());

// 17
// function getItem(name, price, stock){
//     if (price < 0) {
//         console.log('Price must be non-negative');
//         return
//     }
//     return {
//     name,
//     price,
//     stock,
//     inStock: () => stock > 0
//     }
// };
// const item1 = getItem('milk', -5, 10);
// console.log(item1);

// 18
// function getItem(name, price, stock=0){
//     if (price < 0) {
//         console.log('Price must be non-negative');
//         return
//     }
//     return {
//     name,
//     price,
//     stock,
//     inStock: () => stock > 0
//     }
// };
// const item1 = getItem('milk', 5);
// console.log(item1);


// 19
// function multiplier(x) {
//     return n => n * x;
// }
// const double = multiplier(2);
// console.log(double(10));
// console.log(double(0));

// 20
// function addPrefix(prefix) {
//     return msg => prefix + " " + msg;
// }
// const addHello = addPrefix("Hello");
// console.log(addHello("Chaim"));
// console.log(addHello("Moshe"));

// 21 -23
// function manageMessages() {
//     const messages = [];
//     return {
//         getMessages: () => messages,
//         addMessage: (msg) => {messages.push(msg)},
//         deleteMessageByIndex: (index) => {
//             const deletedMessage = messages.splice(index, 1);
//             console.log(deletedMessage.length !== 0 ? "The message deleted" : "Message not found");
//         },
//     }
// }
// const manager = manageMessages();
// console.log(manager.getMessages());
// manager.addMessage("hi");
// manager.addMessage("bye");
// console.log(manager.getMessages());
// manager.deleteMessageByIndex(1);
// console.log(manager.getMessages());

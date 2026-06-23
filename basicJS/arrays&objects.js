// 1
// const numbers = [1, 2, 3];
// console.log(numbers);

// 2
const fruits = ["apple", "banana", "cherry"];
// console.log(fruits[0]);
// console.log(fruits[fruits.length - 1]);

// 3
for (const i in fruits) {
    if (fruits[i] === 'banana') {
        fruits[i] = 'mango';
        break;
    }
}
// console.log(fruits);

// 4
const newLen = fruits.push('orange');
// console.log(newLen);
// console.log(fruits);

// 5
const popItem = fruits.pop();
// console.log(popItem);
// console.log(fruits);

// 6
// console.log(fruits.unshift('kiwi'));
// console.log(fruits);

// 7
// console.log(fruits.shift());
// console.log(fruits);

// const arr = ["a", "b", "c", "d"];

// 8
// console.log(arr.splice(1, 1));
// console.log(arr);

// 9
// arr.splice(1, 0, 'x');
// console.log(arr);

// 10
// arr.splice(2, 1, 'y');
// console.log(arr);

// 11
// const numbers = [3, 5, -4, 0, 2];
// console.log(numbers.length);
// console.log(numbers[numbers.length - 1]);

// 12
// const arr = [2, 'hi', true];
// for (const item of arr) console.log(item);

// 13
// const numbers = [10, 20, 30];
// for (const number of numbers) console.log(number);

// 14
// const numbers = [5, 10, 15];
// let totalSum = 0;
// for (const number of numbers) totalSum += number;
// console.log(totalSum);

// 15
// numbers = [3, 8, 12, 1];
// for (const number of numbers) {
//     if (number > 5) console.log(number);
// }

// 16
const person = {
    'name': 'Chaim',
    age: 22
};
// console.log(person);

// 17
// console.log(person.name, person.age);
// console.log(person['name'], person['age']);

// 18
// Object.assign(person, {name: 'Chaim Leib', city: 'Bney Brak'});
// console.log(person);

// 19
// delete person.age;
// console.log('age' in person);

// 20
const student = {
    name: 'Yael',
    grades: [90, 80, 100]
};
// console.log(student.grades[0]);
// student.grades.push(98);
// student.grades.shift();
// console.log(student);

// 21

// const product = {
//     name: "Laptop",
//     price: 3500,
//     inStock: true
// };
// for (const [key, value] of Object.entries(product)) {
//     console.log(key + ': ' + value);
// }

// 22
const user = {
    username: "admin",
    role: "manager",
    active: true
};
// console.log(Object.keys(user));
// console.log(Object.values(user));
// for (const field of Object.keys(user)) {
//     console.log(field + ' = ' + user[field]);
// }

// 23
const order = {
    id: 101,
    customer: {
        name: "Roi",
        address: {
        city: "Tel Aviv",
        zip: "12345"
        }
    }
};
// console.log(order.customer.address.city);
// order.customer.address.zip = '98765';
// order.customer.phone = '1234';
// delete order.customer.address.city;
// console.log(order);
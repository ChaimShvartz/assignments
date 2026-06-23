import input from 'analiza-sync'
1
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

2
// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }

3
// const numbers = [1, 2, 3, 4, 5];
// let totalSum = 0;
// for (const number of numbers) {
//     totalSum += number;
// }
// console.log(totalSum);

4
// const names = ['Dana', 'Yossi', 'Michal', 'Ron'];
// for (const name of names) {
//     console.log(name);
// }

5
// const numbers = [2, 5, 8, 11, 14, 17, 20];
// for (const number of numbers) {
//     if (!(number % 2)) {
//         console.log(number);
//     }
// }

6
// const numbers = [3, 99, 12, 45, 78];
// let maxNumber = numbers[0];
// for (const number of numbers) {
//     if (number > maxNumber) {
//         maxNumber = number;
//     }
// }
// console.log(maxNumber)

7
// const word = "javascript";
// for (const letter of word) {
//     console.log(letter);
// }

8
// const numbers = [1, 2, 3, 4];
// for (const number of numbers) {
//     console.log(number * 2)
// }

9
// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

10
// let inputUser = '';
// while (inputUser !== 'stop') {
//     inputUser = input();
// }

11
// let number;
// let totalSum = 0;
// while (number !== 0) {
//     number = + input();
//     totalSum += number;
// }
// console.log(totalSum)

12
// const sercerNumber = 7;
// let userGuess;
// while (userGuess !== sercerNumber) {
//     userGuess = + input();
// }

13
// let x = 1;
// while (x < 20) {
//     console.log(x);
//     x++;
// }

14
// let password;
// while (password !== '1234') {
//     password = input();
// }

15
// let count = 50;
// do {
//     console.log(count);
//     count++;
// } while (count < 10);

16
// let choice;
// do {
//     console.log('\t=== MENU ===');
//     console.log('1.\tAdd book.');
//     console.log('2.\tRemove book.');
//     console.log('3.\tBorrow book.');
//     console.log('4.\tReturn book.');
//     console.log("to exit print 'exit'.");
//     choice = input('Enter your choice...');
// } while (choice !== 'exit');

17
// const numbers = [1, 3, 7, 9, 15, 2];
// for (const number of numbers) {
//     if (number > 10) {
//         break;
//     }
// }

18
// const numbers = [5, -1, 8, -3, 10];
// for (const number of numbers) {
//     if (number < 0) {
//         continue;
//     }
//     console.log(number);
// }

19
// const ages = [12, 15, 18, 21, 25];
// for (const age of ages) {
//     if (age >= 18) {
//         console.log(age);
//         break;
//     }
// }

20
// const arr = [10, 20, 30, 40, 50];
// for (const number of arr) {
//     console.log(number);
// }

21
// const numbers = [1, 2, 3, 4, 5, 6];
// let totalSum = 0;
// for (const number of numbers) {
//     if (!(number % 2)) {
//         totalSum += number;
//     }
// }
// console.log(totalSum);

22
// const target = 205;
// const numbers = [10, 15, 20, 25, 30];
// let hasTarget = false;
// for (const number of numbers) {
//     if (number === target) {
//         hasTarget = true;
//         break;
//     }
// }
// console.log(hasTarget ? `${target} in arr` : `${target} not in arr`);

23
// const word = "hello world";
// for (const letter of word) {
//     console.log(letter.toUpperCase());
// }

24
// const numbers = [2, 4, 6, 8, 10, 12];
// for (const number of numbers) {
//     if (number > 8 && !(number % 2)) {
//         console.log(number);
//         break;
//     }
// }

25
// const students = [
//   { name: "דנה", grade: 55 },
//   { name: "יוסי", grade: 90 },
//   { name: "מיכל", grade: 78 },
//   { name: "רון", grade: 45 }
// ];
// for (const student of students) {
//     if (student.grade > 60) {
//         console.log(student.name);
//     }
//     if (student.grade === 100) {
//         break;
//     }
// }
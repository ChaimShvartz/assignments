// 1
const greet = (name) => `Hello ${name}`;

// console.log(greet('Chaim'));

// 2
// const sum = function (num1, num2) {
//   return num1 + num2;
// };
// console.log(sum(5, 7));

// 3
function isEven(num) {
  return !(num % 2);
}

// console.log(isEven(5));
// console.log(isEven(50));

// 4
const getFirst = (array) => array[0];

// console.log(getFirst([5, 4, 2]));

// 5
const upper = (str) => str.toUpperCase();

// console.log(upper('dfhgjk'));

// 10

function add(count) {
  return count + 1;
}

// let count = 0;
// count = add(count);
// count = add(count);
// count = add(count);
// console.log(count);

// 11
const sum_array = (numbers) => {
    let totalSum = 0;
    for (const number of numbers) {
        totalSum += number;
    }
    return totalSum;
};
// console.log(sum_array([5, 2, 6]));

// 12
const square = (number) => number ** 2;
const square_number = () => {
    console.log(square(5));
}
// square_number();

// 14
const get_even_numbers = (numbers) => {
    const even_numbers = [];
    for (const number of numbers) {
        if (!(number % 2)) {
            even_numbers.push(number);
        }
    }
    return even_numbers;
}
// console.log(get_even_numbers([8, 5, 4, 3, 0]));

// 1
function multiple_by_3 (number) {
    return number * 3;
}
// console.log(multiple_by_3(5));

// 2
// const len = (str) => str.length;
// console.log(len('fghjkl'))

// 3
const hisType = (number) => {
    if (number > 0) return 'Positive number';
    if (number < 0) return 'Negative number';
    return 'Equal 0';
}
// console.log(hisType(-10));

// 4
// const max = (...rest) => {
//     maxNumber = rest[0];
//     for (const number of rest) {
//         if (number > maxNumber) maxNumber = number;
//     }
//     return maxNumber;
// }
// console.log(max(...[5, 8, 5, 4]));

// 5
// const len = (array) => array.length;
// console.log(len([]));

// 11
const min = (numbers) => {
    let minNumber = numbers[0];
    for (const number of numbers) {
        if (number < minNumber) 
            minNumber = number;
    }
    return minNumber;
};
// console.log(min([5, -2, 0]))

// 12
const divide_without_rest = (a, b) => !(a % b);
// console.log(divide_without_rest(10, 2));
// console.log(divide_without_rest(10, 5));
// console.log(divide_without_rest(10, 6));

// 13
const join = (strings) => {
    let result = '';
    for (const string of strings)
        result += string;
    return result;
};
// console.log(join(['sdfg', '55', 'qw']));

// 15

const print_numbers = (n) => {
    if (!n)
        return
    print_numbers(n - 1);
    console.log(n);
};
// print_numbers(20);

// 16
const set = function (array) {
    const result = [];
    for (const newItem of array) {
        isNew = true;
        for (const oldItem of result) {
            if (newItem === oldItem) {
                isNew = false;
                break;
            }
        }
        if (isNew)
            result.push(newItem);
    }
    return result;
}
// console.log(set([5, 2]));
// console.log(set([5, 2, 5]));
// console.log(set([5, 2, 2, 2]));

// 18
function sumEvenNumbers (numbers) {
    let totalSum = 0;
    for (const number of numbers){
        if (number % 2 === 0)
            totalSum += number;
    }
    return totalSum;
}
// console.log(sumEvenNumbers([5, 0]));

// 20
let discount = 0.1;

function getPrice(price, discount) {
    return price * (1 - discount);;
}
// console.log(getPrice(50, 0.5));
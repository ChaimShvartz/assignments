const obj = {
    name: 'Chaim',
    age: 22,
    id: 2
}
const obj2 = {
    name: 'Cim',
    age: 228,
    id: 2
}

// 1
// const objectKeys = (obj) => Object.keys(obj);
// console.log(objectKeys(obj));

// 2
// const objectValues = (obj) => Object.values(obj);
// console.log(objectValues(obj));

// 3
// const printObject = obj => {
//     for ([key, value] of Object.entries(obj)) 
//         console.log(key + ' : ' + value);
// }
// printObject(obj)

// 4
// const grades = { math: 80, english: 90, science: 70 };
// const average = (grades) => {
//     const values = Object.values(grades);
//     const sum = values.reduce((acc, current) => acc + current, 0);
//     return sum / values.length;
// };
// console.log(average(grades));

// 5
// const merge = (obj1, obj2) => Object.assign(obj1, obj2);

// console.log(merge(obj, obj2));

// 6
// const defaultSettings = { theme: "light", lang: "en" };
// const userSettings = { lang: "he" };
// const merge = (defaultSettings, userSettings) => {return {...defaultSettings, ...userSettings}};
// console.log(merge(defaultSettings, userSettings));

// 7
// const hasKey = (obj, targetKey) => Object.hasOwn(obj, targetKey);
// console.log(hasKey(obj, 'age'));

// 8
const configObject = obj => {
    Object.freeze(obj);
}
// configObject(obj);
// obj.age = 5
// console.log(obj);

// 9
// const arr = [["name", "Alice"], ["age", 25]]
// const toObject = arr => Object.fromEntries(arr);
// console.log(toObject(arr));

// 10
const prices = { apple: 10, banana: 5, mango: 20 };
const reduce10Percents = prices => {
    const entries = Object.entries(prices);
    const updaedEntries = entries.map(([key, value]) => [key, value * 0.9]);
    return Object.fromEntries(updaedEntries);
}
// console.log(reduce10Percents(prices));

// 11
function getNumberFields (obj) {
    entries = Object.entries(obj);
    filteredEntries = entries.filter(([key, value]) => !isNaN(key)); 
    return Object.fromEntries(filteredEntries);
}
// console.log(getNumberFields(obj));

// 12
// const copyObject = obj => {
//     return {...obj};
// }
// let obj3 = copyObject(obj);
// obj3.age = 10;
// console.log(obj);
// console.log(obj3);

// 13
const hasEqualKeys = (obj1, obj2) => {
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    if (!(keys1.length === keys2.length))
        return false;

    keys1 = keys1.sort((l, f) => l - f);
    keys2 = keys1.sort((l, f) => l - f);

    for (const i in keys1) {
        if (keys1[i] !== keys2[i])
            return false;
    }
    return true;
}
// console.log(hasEqualKeys(obj, {...obj2, l:5}));

// Study Case: Data Structure
const x = 21;
const y = 23;
let z = (y - x) + y;
console.log(z);

// Study Case: Logical Operator
console.log(null || 10 && false);

// Study Case: Data Type - Array Sorting
const scores = [10, 8, 7, 5, 6, 3, 2, 4, 1]
console.log(scores.sort((a, b) => a - b));

// Study Case: Data Type - Array Find
const countries1 = ["Albania", "Turkey", "Netherland", "Germany", "Spain", "England"]
function findCountries(country) {
    let search = countries1.includes(country)
    if (search) {
        return `Negara ${country} terdapat di dalam Array.`
    } else {
        return `Negara ${country} tidak terdapat di dalam Array.`
    }
}
console.log(findCountries('Spain'));
console.log(findCountries('England'));

// Study Case: Data Type - Array Filter
const countries2 = ["Albania", "Turkey", "Netherland", "Germany", "Spain", "England", "Albania", "Germany", "Spain"]
let index = 0, newArray = [];
const length = countries2.length;
function filterCountries(arr) {
    for (let i = 0; i < length - 1; i++) {
        for (let j = i + 1; j < length; j++) {
            if (arr[i] === arr[j]) {
                newArray[index] = arr[i];
                index++;
            }
        }
    }
    return newArray;
}
console.log(filterCountries(countries2));
function average(tab) {
    return tab.reduce((a, b) => (a + b)) / tab.length;
}

const numbers = [20, 77, 11, 10, 228]

console.log(average(numbers))
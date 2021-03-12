const tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve']

for (let i = 0; i < tab.length; i++) {
    console.log(`${tab[i]}, length: ${tab[i].length}`)
}

console.log('****New Loop*****')

for (const string of tab) {
    console.log(string + ' length: ' + string.length)
}

console.log('****New Loop*****')

tab.forEach(element => {
    console.log(`${element}, length: ${element.length}`)
});

let count = tab.length
let start = 0

console.log('****New Loop*****')

while (start < count) {
    console.log(`${tab[start]}, length: ${tab[start].length}`)
    start++
}

console.log('****New Loop*****')

let i = 0
do {
    console.log(`${tab[i]}, length: ${tab[i].length}`)
    i++
  } while (i < tab.length);
  
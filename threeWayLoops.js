const tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve']

for (let i = 0; i < tab.length; i++) {
    console.log(`${tab[i]}, length: ${tab[i].length}`)
}

for (const string of tab) {
    console.log(string + ' length: ' + string.length)
}

tab.forEach(element => {
    console.log(`${element}, length: ${element.length}`)
});
const numbers = [10, 20, 30, 40, 50]

function podium(array) {
    array.sort((a, b) => b - a);
    array.slice(0, 2)
    return `1st :${array[0]} 2st :${array[1]} 3rd :${array[2]}`

}

console.log(podium(numbers))
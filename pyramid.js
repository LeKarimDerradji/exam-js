str = ''
const pyramid = (nbBase) => {
    for (let i = 1; i <= nbBase; i++) {
        str = i.toString()
        console.log(`${str.repeat(i)}`)
    }
}

pyramid(5)
const guessNumber = (userGuess, number) => {
    if (userGuess < number) {
        console.log(`Your guess ${userGuess} is inferior to the winning number.`)
    } else if (userGuess > number) {
        console.log(`Your guess ${userGuess} is superior to the winning number.`)
    } else if (userGuess === number) {
        console.log('Alright, you won 300 BTC, you lucky you')
    }
}

guessNumber(7, 6)
guessNumber(5, 6)
guessNumber(6, 6)
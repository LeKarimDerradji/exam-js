const square = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8],
]


let number = 3

// Returns true if mat[][] is magic 
// square, else returns false. 


function isMagicSquare(matrix) {
    let sum = 0
    for (const i in matrix, number) {
        sum = sum + matrix[i][i]
    }
    
    sum2 = 0
    for (const i in matrix, number) {
        sum2 = sum2 + matrix[i][number - i - 1]
        if (sum != sum2) {
            return false
        }
    }

    // Already lost

}

// Okay I really don't know what I'm doing, let's push all the others. 
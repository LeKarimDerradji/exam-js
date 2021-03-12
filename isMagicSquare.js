const square = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8],
]


function isMagicSquare(array) {
    function checkMagic(array) {
        array = array.map(x => x.reduce((a, b) => a + b));
 
        return Array.from(new Set(array)).length === 1;
    }
 
    function rotate(array) {
        return array[0].map((x, i) => array.map(x => x[i]))
    }
   
    if(checkMagic(array) &&
    checkMagic(rotate(array))) {
        console.log(true)
    } ;
}

isMagicSquare(square)
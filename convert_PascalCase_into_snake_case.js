function main(string) {
    const letters = ('' + string).split('');
    const lowerLetters = ('' + string).toLowerCase().split('');
    const snakeArr = [];

    for (let i = 0; i < letters.length; i++) {
        if (i) {
            if (letters[i] !== lowerLetters[i]) {
                snakeArr.push('_');
                snakeArr.push(lowerLetters[i]);
            } else {
                snakeArr.push(lowerLetters[i]);
            }
        } else {
            snakeArr.push(lowerLetters[i]);
        }
    }
    return snakeArr.join('');
}

function example(string) {
    return ('' + string).replace(/(.)([A-Z])/g, '$1_$2').toLowerCase();
}

module.exports.main = main;
module.exports.example = example;

const example1 = require('./PokerHands');
const example2 = require('./OUT_EXAMPLE');

function main(string) {
    const hand1 = new example1.PokerHand(string[0]);
    const hand2 = new example1.PokerHand(string[1]);

    let compareResult = hand1.compareWith(hand2);
    switch (compareResult) {
        case 1:
            compareResult = 'win';
            break;
        case 2:
            compareResult = 'loss';
            break;
        case 3:
            compareResult = 'tie';
            break;
    }
    return compareResult;
}

function example(string) {
    const hand1 = new example2.PokerHand(string[0]);
    const hand2 = new example2.PokerHand(string[1]);

    let compareResult = hand1.compareWith(hand2);
    switch (compareResult) {
        case 1:
            compareResult = 'win';
            break;
        case 2:
            compareResult = 'loss';
            break;
        case 3:
            compareResult = 'tie';
            break;
    }
    return compareResult;
}

module.exports.main = main;
module.exports.example = example;

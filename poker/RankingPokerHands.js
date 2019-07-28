const {PokerHand} = require('./PokerHands');
const outExample = require('./OUT_EXAMPLE');

function main(string) {
    const hand1 = new PokerHand(string[0]);
    const hand2 = new PokerHand(string[1]);

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
    const hand1 = new outExample.PokerHand(string[0]);
    const hand2 = new outExample.PokerHand(string[1]);

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

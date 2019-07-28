const {PokerHand} = require('./PokerHands');

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

    console.log(hand1.cards.array);
    console.log(hand2.cards.array);
    return compareResult;
}

function example(string) {
    return 'undefined';
}

module.exports.main = main;
module.exports.example = example;

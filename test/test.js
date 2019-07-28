const {PokerHand, Result} = require('../poker/PokerHands');
const assert = require('assert');

function test(expected, player, opponent) {
    const p = new PokerHand(player);
    const o = new PokerHand(opponent);
    assert.equal(p.compareWith(o), expected);
}

describe("If a poker hand is compared to another poker hand then:", function () {
    it("Highest straight flush wins", () => {
        test(Result.loss, "2H 3H 4H 5H 6H", "KS AS TS QS JS");
    });
    it("Straight flush wins of 4 of a kind", () => {
        test(Result.win, "2H 3H 4H 5H 6H", "AS AD AC AH JD");
    });
    it("Highest 4 of a kind wins", () => {
        test(Result.win, "AS AH 2H AD AC", "JS JD JC JH 3D");
    });
    it("4 Of a kind wins of full house", () => {
        test(Result.loss, "2S AH 2H AS AC", "JS JD JC JH AD");
    });
    it("Full house wins of flush", () => {
        test(Result.win, "2S AH 2H AS AC", "2H 3H 5H 6H 7H");
    });
    it("Highest flush wins", () => {
        test(Result.win, "AS 3S 4S 8S 2S", "2H 3H 5H 6H 7H");
    });
    it("Flush wins of straight", () => {
        test(Result.win, "2H 3H 5H 6H 7H", "2S 3H 4H 5S 6C");
    });
    it("Equal straight is tie", () => {
        test(Result.tie, "2S 3H 4H 5S 6C", "3D 4C 5H 6H 2S");
    });
    it("Straight wins of three of a kind", () => {
        test(Result.win, "2S 3H 4H 5S 6C", "AH AC 5H 6H AS");
    });
    it("3 Of a kind wins of two pair", () => {
        test(Result.loss, "2S 2H 4H 5S 4C", "AH AC 5H 6H AS");
    });
    it("2 Pair wins of pair", () => {
        test(Result.win, "2S 2H 4H 5S 4C", "AH AC 5H 6H 7S");
    });
    it("Highest pair wins", () => {
        test(Result.loss, "6S AD 7H 4S AS", "AH AC 5H 6H 7S");
    });
    it("Pair wins of nothing", () => {
        test(Result.loss, "2S AH 4H 5S KC", "AH AC 5H 6H 7S");
    });
    it("Highest card loses", () => {
        test(Result.loss, "2S 3H 6H 7S 9C", "7H 3C TH 6H 9S");
    });
    it("Highest card wins", () => {
        test(Result.win, "4S 5H 6H TS AC", "3S 5H 6H TS AC");
    });
    it("Equal cards is tie", () => {
        test(Result.tie, "2S AH 4H 5S 6C", "AD 4C 5H 6H 2C");
    });
});


var hands = ["4S 3H 2C 7S 5H",
    "9D 8H 2C 6S 7H",
    "2D 6D 9D TH 7D",
    "TC 8C 2S JH 6C",
    "JH 8S TH AH QH",
    "TS KS 5S 9S AC",
    "KD 6S 9D TH AD",
    "KS 8D 4D 9S 4S", // pair
    "8C 4S KH JS 4D", // pair
    "QH 8H KD JH 8S", // pair
    "KC 4H KS 2H 8D", // pair
    "KD 4S KC 3H 8S", // pair
    "AH 8S AS KC JH", // pair
    "3H 4C 4H 3S 2H", // 2 pairs
    "5S 5D 2C KH KC", // 2 pairs
    "3C KH 5D 5S KC", // 2 pairs
    "AS 3C KH AD KC", // 2 pairs
    "7C 7S 3S 7H 5S", // 3 of a kind
    "7C 7S KH 2H 7H", // 3 of a kind
    "AC KH QH AH AS", // 3 of a kind
    "3C 5C 4C 2C 6H", // straight
    "6S 8S 7S 5H 9H", // straight
    "JS QS 9H TS KH", // straight
    "QC KH TS JS AH", // straight
    "8C 9C 5C 3C TC", // flush
    "3S 8S 9S 5S KS", // flush
    "4C 5C 9C 8C KC", // flush
    "JH 8H AH KH QH", // flush
    "3D 2H 3H 2C 2D", // full house
    "2H 2C 3S 3H 3D", // full house
    "KH KC 3S 3H 3D", // full house
    "JC 6H JS JD JH", // 4 of a kind
    "JC 7H JS JD JH", // 4 of a kind
    "JC KH JS JD JH", // 4 of a kind
    "2D 6D 3D 4D 5D", // straigh flush
    "5C 6C 3C 7C 4C", // straigh flush
    "JH 9H TH KH QH", // straigh flush
    "JH AH TH KH QH"]; // royal flush

describe("Randomized tests", function () {
    it("Can compare each hand from a list of hands", function () {
        for (let i = 0; i < 1000; i++) {
            const index = Math.floor((Math.random() * hands.length));
            const opponentIndex = Math.floor((Math.random() * hands.length));
            const hand = new PokerHand(hands[index]);
            const handOpponent = new PokerHand(hands[opponentIndex]);
            const expected = index > opponentIndex ? Result.win : index < opponentIndex ? Result.loss : Result.tie;
            try {
                assert.equal(hand.compareWith(handOpponent), expected);
            } catch (e) {
                let compareResult = expected;
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
                console.log('hand', 'handOpponent', `'${hands[index]}',`, `'${hands[opponentIndex]}'`, compareResult);
                throw(e);
            }
        }
    });
});

let searched = null;
const Result = {
        "win": 1,
        "loss": 2,
        "tie": 3
    },
    cardStrength = {
        '2': 1,
        '3': 2,
        '4': 3,
        '5': 4,
        '6': 5,
        '7': 6,
        '8': 7,
        '9': 8,
        'T': 9,
        'J': 10,
        'Q': 11,
        'K': 12,
        'A': 13
    },
    ratingMap = {
        ROYAL_FLUSH: 10,
        STRAIGHT_FLUSH: 9,
        FOUR_OF_KIND: 8,
        FULL_HOUSE: 7,
        FLUSH: 6,
        STRAIGHT: 5,
        THREE_OF_KIND: 4,
        TWO_PAIRS: 3,
        PAIR: 2,
        HIGH_CARD: 1
    },
    resetRating = (rating) => {
        rating.rating = 0;
        rating.score = 0;
        return rating;
    },
    getSameStrengthCard = (cards) => {
        searched = {};
        searched[cards[0].strength] = searched[cards[0].strength] ? searched[cards[0].strength] + 1 : 1;
        searched[cards[1].strength] = searched[cards[1].strength] ? searched[cards[1].strength] + 1 : 1;
        searched[cards[2].strength] = searched[cards[2].strength] ? searched[cards[2].strength] + 1 : 1;
        searched[cards[3].strength] = searched[cards[3].strength] ? searched[cards[3].strength] + 1 : 1;
        searched[cards[4].strength] = searched[cards[4].strength] ? searched[cards[4].strength] + 1 : 1;
        return searched;
    },
    stringToCardsArray = (hand) => {
        const
            strings = hand.toUpperCase().split(' '),
            cards = [
                {strength: cardStrength[strings[0][0]], cardSuit: strings[0][1]},
                {strength: cardStrength[strings[1][0]], cardSuit: strings[1][1]},
                {strength: cardStrength[strings[2][0]], cardSuit: strings[2][1]},
                {strength: cardStrength[strings[3][0]], cardSuit: strings[3][1]},
                {strength: cardStrength[strings[4][0]], cardSuit: strings[4][1]}
            ];
        cards.sort((a, b) => a.strength - b.strength);
        return cards;
    },
    getKindsRating = (cards, ratingCount) => {
        searched = {};
        let rating = {};
        for (let i = 0; i < 5; i++) {
            const strength = cards[i].strength;
            searched[strength] = searched[strength] ? searched[strength] + 1 : 1;
            if (searched[strength] === ratingCount) {
                rating.score = strength;
                rating.score *= ratingCount;
                break
            }
        }
        return rating;
    };

function PokerHand(hand) {
    let rating = {rating: 0, score: 0};
    this.cards = {rating: rating, array: null};

    this.calculateRating = (cards) => {
        switch (true) {
            case (rating = getRoyalFlashRating(cards)).rating > 0:
                break;
            case (rating = getStraightFlashRating(cards)).rating > 0:
                break;
            case (rating = getFourOfKindRating(cards)).rating > 0:
                break;
            case (rating = getFullHouseRating(cards)).rating > 0:
                break;
            case (rating = getFlashRating(cards)).rating > 0:
                break;
            case (rating = getStraightRating(cards)).rating > 0:
                break;
            case (rating = getThreeOfKindRating(cards)).rating > 0:
                break;
            case (rating = getTwoPairsRating(cards)).rating > 0:
                break;
            case (rating = getPairRating(cards)).rating > 0:
                break;
            case (rating = getHighCardRating(cards)).rating > 0:
                break;
            default:
                break;
        }
        return rating;
    };

    function getRoyalFlashRating(cards) {
        resetRating(rating);
        if (cards[0].strength !== cardStrength.T) {
            return rating;
        }
        rating = getStraightFlashRating(cards);
        if (rating.score) {
            rating.rating = ratingMap.ROYAL_FLUSH;
        }
        return rating;
    }


    function getStraightFlashRating(cards) {
        resetRating(rating);
        rating.score = cards[0].strength;
        for (let i = 1; i < 5; i++) {
            const card = cards[i];
            const prevCard = cards[i - 1];
            if ((card.strength - prevCard.strength === 1) && (card.cardSuit === prevCard.cardSuit)) {
                rating.score += card.strength;
            } else {
                return resetRating(rating);
            }
        }
        rating.rating = ratingMap.STRAIGHT_FLUSH;
        return rating;
    }

    function getFourOfKindRating(cards) {
        let rating = getKindsRating(cards, 4);
        if (rating.score) {
            rating.rating = ratingMap.FOUR_OF_KIND;
        }
        return rating;
    }

    function getFullHouseRating(cards) {
        resetRating(rating);
        let result = getSameStrengthCard(cards);
        const keys = Object.keys(result);
        if (keys.length === 2) {
            rating.rating = ratingMap.FULL_HOUSE;
            rating.score = keys[0] * result[keys[0]] + keys[1] * result[keys[1]];
            return rating;
        }
        return rating;
    }

    function getFlashRating(cards) {
        resetRating(rating);
        rating.score = cards[0].strength;
        for (let i = 1; i < 5; i++) {
            const card = cards[i];
            const previewCard = cards[i - 1];
            if (card.cardSuit !== previewCard.cardSuit) {
                return resetRating(rating);
            }
            rating.score += card.strength;
        }
        rating.rating = ratingMap.FLUSH;
        return rating;
    }

    function getStraightRating(cards) {
        resetRating(rating);
        rating.score = cards[0].strength;
        for (let i = 1; i < 5; i++) {
            const strength = cards[i].strength;
            const previewStrength = cards[i - 1].strength;
            if (strength - previewStrength !== 1) {
                return resetRating(rating);
            }
            rating.score += strength;
        }
        rating.rating = ratingMap.STRAIGHT;
        return rating;
    }

    function getThreeOfKindRating(cards, ratingCount = 3) {
        let rating = getKindsRating(cards, 3);
        if (rating.score) {
            rating.rating = ratingMap.THREE_OF_KIND;
        }
        return rating;
    }

    function getTwoPairsRating(cards) {
        resetRating(rating);
        let result = getSameStrengthCard(cards);
        let keys = Object.keys(result);
        if (keys.length === 3) {
            for (let i = 0; i < 3; i++) {
                const key = keys[i];
                if (result[key] === 1) {
                    delete result[key];
                    keys = Object.keys(result);
                    rating.rating = ratingMap.TWO_PAIRS;
                    rating.score = keys[0] * result[keys[0]] + keys[1] * result[keys[1]];
                    return rating;
                }
            }
        }
        return rating;
    }

    function getPairRating(cards) {
        resetRating(rating);
        let result = getSameStrengthCard(cards);
        let strengthKeys = Object.keys(result);
        if (strengthKeys.length === 4) {
            for (let i = 0; i < 4; i++) {
                const strengthKey = strengthKeys[i];
                if (result[strengthKey] === 2) {
                    rating.rating = ratingMap.PAIR;
                    rating.score = strengthKey * 2;
                    return rating;
                }
            }
        }
        return rating;
    }

    function getHighCardRating(cards) {
        resetRating(rating);

        rating.rating = ratingMap.HIGH_CARD;
        rating.score = cards[cards.length - 1].strength;
        return rating;
    }

    this.cards.array = stringToCardsArray(hand);
    this.cards.rating = this.calculateRating(this.cards.array);
}

PokerHand.prototype.compareWith = function (hand) {
    const first = this.cards.rating;
    const second = hand.cards.rating;
    if (first.rating > second.rating) {
        return Result.win;
    } else if (first.rating < second.rating) {
        return Result.loss;
    } else {
        if (first.score > second.score) {
            return Result.win;
        } else if (first.score < second.score) {
            return Result.loss;
        } else {
            const firstArray = this.cards.array;
            const secondArray = hand.cards.array;
            let calcScore = 0;
            for (let i = 4; i > -1; i--) {
                const firstScore = firstArray[i].strength;
                const secondScore = secondArray[i].strength;
                calcScore = firstScore - secondScore;
                if (calcScore !== 0) {
                    break;
                }
            }
            if (calcScore > 0) {
                return Result.win;
            } else if (calcScore < 0) {
                return Result.loss;
            } else {
                return Result.tie;
            }
        }
    }
};

module.exports.Result = Result;
module.exports.PokerHand = PokerHand;

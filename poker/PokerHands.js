const Result = {"win": 1, "loss": 2, "tie": 3};

function PokerHand(hand) {
    const cardStrength = {
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
        };

    let searchResult = null;
    let rating = {rating: 0, score: 0};
    this.cards = {rating: rating, array: null};

    this.stringToCardsArray = (hand) => {
        const strings = hand.toUpperCase().split(' ');
        const cards = [];
        for (let i = 0; i < strings.length; i++) {
            cards.push(stringToCard(strings[i]));
        }
        cards.sort((a, b) => a.strength - b.strength);
        return cards;
    };

    function stringToCard(strCard) {
        const cardParts = strCard.split('');
        return {
            strength: cardStrength[cardParts[0]],
            cardSuit: cardParts[1]
        };
    }

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

    function resetRating(rating) {
        rating.rating = 0;
        rating.score = 0;
        return rating;
    }

    function getKindsRating(cards, ratingCount) {
        searchResult = {};
        resetRating(rating);

        for (let i = 0; i < cards.length; i++) {
            const card = cards[i];
            searchResult[card.strength] = searchResult[card.strength] ? searchResult[card.strength] + 1 : 1;
            if (searchResult[card.strength] === ratingCount) {
                rating.score = card.strength;
                rating.score *= ratingCount;
                break
            }
        }

        return rating;
    }

    function getSameStrengthCard(cards) {
        searchResult = {};
        for (let i = 0; i < cards.length; i++) {
            const card = cards[i];
            searchResult[card.strength] = searchResult[card.strength] ? searchResult[card.strength] + 1 : 1;
        }
        return searchResult;
    }

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
        for (let i = 1; i < cards.length; i++) {
            const card = cards[i];
            const previewCard = cards[i - 1];
            if ((card.strength - previewCard.strength === 1) && (card.cardSuit === previewCard.cardSuit)) {
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

        const strengthKeys = Object.keys(result);

        if (strengthKeys.length === 2) {
            rating.rating = ratingMap.FULL_HOUSE;
            rating.score = strengthKeys[0] * result[strengthKeys[0]] + strengthKeys[1] * result[strengthKeys[1]];
            return rating;
        } else {
            return resetRating(rating);
        }
    }

    function getFlashRating(cards) {
        resetRating(rating);

        rating.score = cards[0].strength;
        for (let i = 1; i < cards.length; i++) {
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
        for (let i = 1; i < cards.length; i++) {
            const card = cards[i];
            const previewCard = cards[i - 1];
            if (card.strength - previewCard.strength !== 1) {
                return resetRating(rating);
            }
            rating.score += card.strength;
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

        let strengthKeys = Object.keys(result);

        if (strengthKeys.length === 3) {
            for (let i = 0; i < strengthKeys.length; i++) {
                const strengthKey = strengthKeys[i];
                if (result[strengthKey] === 1) {
                    delete result[strengthKey];
                    break;
                }
            }
            strengthKeys = Object.keys(result);
            rating.rating = ratingMap.TWO_PAIRS;
            rating.score = strengthKeys[0] * result[strengthKeys[0]] + strengthKeys[1] * result[strengthKeys[1]];
            return rating;
        } else {
            return resetRating(rating);
        }
    }

    function getPairRating(cards) {
        resetRating(rating);
        let result = getSameStrengthCard(cards);

        let strengthKeys = Object.keys(result);

        if (strengthKeys.length === 4) {
            let resultKey;
            for (let i = 0; i < strengthKeys.length; i++) {
                const strengthKey = strengthKeys[i];
                if (result[strengthKey] === 2) {
                    resultKey = strengthKey;
                    break;
                }
            }

            rating.rating = ratingMap.PAIR;
            rating.score = resultKey * 2;
            return rating;
        } else {
            return resetRating(rating);
        }
    }

    function getHighCardRating(cards) {
        resetRating(rating);

        rating.rating = ratingMap.HIGH_CARD;
        rating.score = cards[cards.length - 1].strength;
        return rating;
    }

    this.cards.array = this.stringToCardsArray(hand);
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
            let firstScore = 0;
            let secondScore = 0;
            const firstArray = this.cards.array;
            const secondArray = hand.cards.array;
            const length = firstArray.length;
            let calcScore = 0;
            for (let i = 0; i < length; i++) {
                firstScore = firstArray[length - 1 - i].strength;
                secondScore = secondArray[length - 1 - i].strength;
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

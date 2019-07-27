function main(string) {
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

        this.cards = {rating: {rating: 0, score: 0}, array: null};

        function compare(a, b) {
            if (a.strength < b.strength) {
                return -1;
            }
            if (a.strength > b.strength) {
                return 1;
            }
            return 0;
        }

        function stringToCardsArray(hand) {
            const strings = hand.toUpperCase().split(' ');
            const cards = [];
            for (let i = 0; i < strings.length; i++) {
                const strCard = strings[i];
                cards.push(stringToCard(strCard));
            }
            cards.sort(compare.bind(this));
            return cards;
        }

        function stringToCard(strCard) {
            const cardParts = strCard.split('');
            return {
                strength: cardStrength[cardParts[0]],
                cardSuit: cardParts[1]
            };
        }

        function calculateRating(cards) {
            let rating = {rating: 0, score: 0};
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
        }

        function resetRating(rating) {
            rating.rating = 0;
            rating.score = 0;
            return rating;
        }

        function getRoyalFlashRating(cards) {
            let rating = {rating: 0, score: 0};
            if (cards[0].strength !== cardStrength.T) {
                return rating;
            }

            rating = getStraightFlashRating(cards);

            rating.rating = ratingMap.ROYAL_FLUSH;
            return rating;
        }


        function getStraightFlashRating(cards) {
            let rating = {rating: 0, score: 0};

            rating.score = cards[0].strength;
            for (let i = 1; i < cards.length; i++) {
                const card = cards[i];
                const previewCard = cards[i - 1];
                if ((card.strength - previewCard.strength !== 1) || (card.cardSuit !== previewCard.cardSuit)) {
                    return resetRating(rating);
                }
                rating.score += card.strength;
            }

            rating.rating = ratingMap.STRAIGHT_FLUSH;
            return rating;
        }

        function getFourOfKindRating(cards) {
            let rating = {rating: 0, score: 0};
            let result = {};
            let target = 0;

            for (let i = 0; i < cards.length; i++) {
                const card = cards[i];
                result['' + card.strength] = result['' + card.strength] ? result['' + card.strength] + 1 : 1;
                if (result['' + card.strength] === 4) {
                    target = card.strength;
                    break
                }
            }

            if (target) {
                rating.rating = ratingMap.FOUR_OF_KIND;
                rating.score = target * 4;
                return rating;
            } else {
                return resetRating(rating);
            }
        }

        function getFullHouseRating(cards) {
            let rating = {rating: 0, score: 0};
            let result = {};

            for (let i = 0; i < cards.length; i++) {
                const card = cards[i];
                result['' + card.strength] = result['' + card.strength] ? result['' + card.strength] + 1 : 1;
            }

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
            let rating = {rating: 0, score: 0};

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
            let rating = {rating: 0, score: 0};

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

        function getThreeOfKindRating(cards) {
            let rating = {rating: 0, score: 0};
            rating.rating = ratingMap.THREE_OF_KIND;
            return rating;
        }

        function getTwoPairsRating(cards) {
            let rating = {rating: 0, score: 0};
            rating.rating = ratingMap.TWO_PAIRS;
            return rating;
        }

        function getPairRating(cards) {
            let rating = {rating: 0, score: 0};
            rating.rating = ratingMap.PAIR;
            return rating;
        }

        function getHighCardRating(cards) {
            let rating = {rating: 0, score: 0};
            rating.rating = ratingMap.HIGH_CARD;
            return rating;
        }

        this.cards.array = stringToCardsArray(hand);
        this.cards.rating = calculateRating(this.cards.array);
    }

    PokerHand.prototype.compareWith = function (hand) {
        return Result.tie;
    };

    const hand = new PokerHand(string);
    return JSON.stringify(hand.cards);
}

function example(string) {
    return '2';
}

module.exports.main = main;
module.exports.example = example;

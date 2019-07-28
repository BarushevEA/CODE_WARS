const exec = require('./executor');
const firstNonRepeatingLetter = require('../first_non_repeating_letter');
const tortoiseRacing = require('../tortoiseRacing');
const greedIsGood = require('../greedIsGood');
const isMyFriendCheating = require('../isMyFriendCheating');
const RankingPokerHands = require('../poker/RankingPokerHands');

// exec.execute(firstNonRepeatingLetter, 'firstNonRepeatingLetter', 'moonmen');
// exec.execute(tortoiseRacing, 'tortoiseRacing', {v1: 720, v2: 850, g: 70});
// exec.execute(greedIsGood, 'greedIsGood', [2, 4, 4, 5, 4]);
// exec.execute(isMyFriendCheating, 'isMyFriendCheating', 1000008, 1000);
// exec.execute(convertPascalCase, 'convertPascalCase', 'convertPascalCase', 1000000);

exec.execute(RankingPokerHands, 'RankingPokerHands', ['TS KS 5S 9S AC', 'JH 8S TH AH QH'], 0);
// exec.execute(RankingPokerHands, 'RankingPokerHands', ['JH 8S TH AH QH', 'KD 6S 9D TH AD'], 0);
// exec.execute(RankingPokerHands, 'RankingPokerHands', ['JH 8S TH AH QH', 'KD 6S 9D TH AD'], 0);
// exec.execute(RankingPokerHands, 'RankingPokerHands', ['JH 8S TH AH QH', 'TS KS 5S 9S AC'], 0);
// exec.execute(RankingPokerHands, 'RankingPokerHands', ['JH 8S TH AH QH', 'TS KS 5S 9S AC'], 0);
// exec.execute(RankingPokerHands, 'RankingPokerHands', ['KD 6S 9D TH AD', 'JH 8S TH AH QH'], 0);
// exec.execute(RankingPokerHands, 'RankingPokerHands', ['JH 8S TH AH QH', 'TS KS 5S 9S AC'], 0);


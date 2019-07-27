const exec = require('./executor');
const firstNonRepeatingLetter = require('../first_non_repeating_letter');
const tortoiseRacing = require('../tortoiseRacing');
const greedIsGood = require('../greedIsGood');
const isMyFriendCheating = require('../isMyFriendCheating');
const RankingPokerHands = require('../RankingPokerHands');

// exec.execute(firstNonRepeatingLetter, 'firstNonRepeatingLetter', 'moonmen');
// exec.execute(tortoiseRacing, 'tortoiseRacing', {v1: 720, v2: 850, g: 70});
// exec.execute(greedIsGood, 'greedIsGood', [2, 4, 4, 5, 4]);
// exec.execute(isMyFriendCheating, 'isMyFriendCheating', 1000008, 1000);
// exec.execute(convertPascalCase, 'convertPascalCase', 'convertPascalCase', 1000000);

exec.execute(RankingPokerHands, 'RankingPokerHands', ["6S AD 7H 4S AS", "AH AC 5H 6H 7S"], 1);
exec.execute(RankingPokerHands, 'RankingPokerHands', ["4S 5H 6H TS AC", "3S 5H 6H TS AC"], 1);


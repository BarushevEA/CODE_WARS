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

exec.execute(RankingPokerHands, 'RankingPokerHands', ["2H 3H 4H 5H 6H", "KS AS TS QS JS"], 100000);
exec.execute(RankingPokerHands, 'RankingPokerHands', ["2H 3H 4H 5H 6H", "AS AD AC AH JD"], 100000);
exec.execute(RankingPokerHands, 'RankingPokerHands', ["AS AH 2H AD AC", "JS JD JC JH 3D"], 100000);
exec.execute(RankingPokerHands, 'RankingPokerHands', ["2S AH 2H AS AC", "JS JD JC JH AD"], 100000);
exec.execute(RankingPokerHands, 'RankingPokerHands', ["2S AH 2H AS AC", "2H 3H 5H 6H 7H"], 100000);
exec.execute(RankingPokerHands, 'RankingPokerHands', ["AS 3S 4S 8S 2S", "2H 3H 5H 6H 7H"], 100000);
exec.execute(RankingPokerHands, 'RankingPokerHands', ["2H 3H 5H 6H 7H", "2S 3H 4H 5S 6C"], 100000);
exec.execute(RankingPokerHands, 'RankingPokerHands', ["2S 3H 4H 5S 6C", "AH AC 5H 6H AS"], 100000);
exec.execute(RankingPokerHands, 'RankingPokerHands', ["2S 2H 4H 5S 4C", "AH AC 5H 6H AS"], 100000);
exec.execute(RankingPokerHands, 'RankingPokerHands', ["2S 2H 4H 5S 4C", "AH AC 5H 6H 7S"], 100000);
exec.execute(RankingPokerHands, 'RankingPokerHands', ["6S AD 7H 4S AS", "AH AC 5H 6H 7S"], 100000);
exec.execute(RankingPokerHands, 'RankingPokerHands', ["2S AH 4H 5S KC", "AH AC 5H 6H 7S"], 100000);
exec.execute(RankingPokerHands, 'RankingPokerHands', ["2S 3H 6H 7S 9C", "7H 3C TH 6H 9S"], 100000);
exec.execute(RankingPokerHands, 'RankingPokerHands', ["4S 5H 6H TS AC", "3S 5H 6H TS AC"], 100000);
exec.execute(RankingPokerHands, 'RankingPokerHands', ["2S AH 4H 5S 6C", "AD 4C 5H 6H 2C"], 100000);



const exec = require('./executor');
const firstNonRepeatingLetter = require('../first_non_repeating_letter');
const tortoiseRacing = require('../tortoiseRacing');
const greedIsGood = require('../greedIsGood');
const isMyFriendCheating = require('../isMyFriendCheating');

// exec.execute(firstNonRepeatingLetter, 'firstNonRepeatingLetter', 'moonmen');
// exec.execute(tortoiseRacing, 'tortoiseRacing', {v1: 720, v2: 850, g: 70});
// exec.execute(greedIsGood, 'greedIsGood', [2, 4, 4, 5, 4]);
exec.execute(isMyFriendCheating, 'isMyFriendCheating', 1000008, 1000);

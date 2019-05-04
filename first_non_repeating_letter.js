function firstNonRepeatingLetter(s) {
    let array = s.toLowerCase().split('');
    for (let i = 0, counter = 0; i < array.length; i++, counter = 0) {
        for (let j = 0; j < array.length && counter < 2; j++) counter += array[i] === array[j] ? 1 : 0;
        if (counter === 1) return s[i];
    }
    return '';
}

function firstNonRepeatingLetter2(s) {
    var t = s.toLowerCase();
    for (var x = 0; x < t.length; x++) if (t.indexOf(t[x]) === t.lastIndexOf(t[x])) return s[x];
    return "";
}

module.exports.main = firstNonRepeatingLetter;
module.exports.example = firstNonRepeatingLetter2;

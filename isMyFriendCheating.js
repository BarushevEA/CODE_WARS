function main(n) {
    const general = ((1 + n) / 2) * n;
    let arr = [];

    for (let a = n; a > 1; a--) {
        const b = Math.trunc((general - a) / a);
        if (general - b - a === b * a) arr.push([b, a]);
    }

    const size = arr.length;
    if (size) for (let i = size - 1; i > -1; i--) arr.push([arr[i][1], arr[i][0]]);

    return arr;
}

function example(n) {
    let sum = n * (n + 1) / 2,
        result = [];
    for (let a = 1, b; a < n; a++) {
        b = (sum - a) / (a + 1);
        if (0 < b && b < n + 1 && b === ~~b) result.push([a, b]);
    }
    return result;
}

module.exports.main = main;
module.exports.example = example;

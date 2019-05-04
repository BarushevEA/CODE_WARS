function main(n) {
    const
        general = Math.trunc(n * (1 + n) / 2),
        bound = Math.trunc(Math.sqrt(general));

    let arr = [];

    for (let first = n; first > bound; first--) {
        const second = Math.trunc((general - first) / first);
        if (general - second - first === second * first) arr.push([second, first]);
    }

    const size = arr.length;
    if (size) for (let i = size - 1; i > -1; i--) arr.push([arr[i][1], arr[i][0]]);

    return arr;
}

function example(n) {
    let possibilities = [];
    const sum = n * (n + 1) / 2;
    for (let x = Math.ceil(n / 2); x < n; ++x) {
        let y = (sum - x) / (x + 1);
        if (y === Math.floor(y)) {
            possibilities.push([x, y]);
        }
    }
    return possibilities;
}

module.exports.main = main;
module.exports.example = example;

function main(dice) {
    let one = 0, two = 0, tree = 0, fore = 0, five = 0, six = 0, points = 0;
    for (let i = 0; i < 5; i++) {
        if (dice[i] === 6) {
            six++;
            continue;
        }
        if (dice[i] === 5) {
            five++;
            continue;
        }
        if (dice[i] === 4) {
            fore++;
            continue;
        }
        if (dice[i] === 3) {
            tree++;
            continue;
        }
        if (dice[i] === 2) {
            two++;
            continue;
        }
        if (dice[i] === 1) one++;
    }

    points += six >= 3 ? 600 : 0;
    points += five >= 3 ? 500 + (five - 3) * 50 : five * 50;
    points += fore >= 3 ? 400 : 0;
    points += tree >= 3 ? 300 : 0;
    points += two >= 3 ? 200 : 0;
    points += one >= 3 ? 1000 + (one - 3) * 100 : one * 100;
    return points;
}

function example(dice) {
    let one = 0, two = 0, tree = 0, fore = 0, five = 0, six = 0, points = 0;
    for (let i = 0; i < 5; i++) {
        if (dice[i] === 6) {
            six++;
            continue;
        }
        if (dice[i] === 5) {
            five++;
            continue;
        }
        if (dice[i] === 4) {
            fore++;
            continue;
        }
        if (dice[i] === 3) {
            tree++;
            continue;
        }
        if (dice[i] === 2) {
            two++;
            continue;
        }
        if (dice[i] === 1) one++;
    }

    points += six >= 3 ? 600 : 0;
    points += five >= 3 ? 500 + (five - 3) * 50 : five * 50;
    points += fore >= 3 ? 400 : 0;
    points += tree >= 3 ? 300 : 0;
    points += two >= 3 ? 200 : 0;
    points += one >= 3 ? 1000 + (one - 3) * 100 : one * 100;
    return points;
}

module.exports.main = main;
module.exports.example = example;



function digPow(n, p) {
    let num = n,
        reducer = 0,
        counter = ('' + n).length;
    while (num > 0) {
        reducer += (num % 10) ** (p + counter-- - 1);
        num = Math.trunc(num / 10);
    }
    let result = reducer / n;
    return Math.trunc(result) !== result ? -1 : result;
}

console.log(digPow(46288, 3));

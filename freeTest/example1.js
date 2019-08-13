const switcher = {
    a: (str) => str,
    b: (str) => str,
    c: (str) => str,
    d: (str) => str,
    e: (str) => str,
    f: (str) => str,
    g: (str) => str,
    j: (str) => str,
    k: (str) => str,
    l: (str) => str,
};

function execute(str) {
    const res = switcher[str];
    if (res) {
        return res('a1 ' + str);
    }
    return 'unknown';
}

module.exports.execute = execute;

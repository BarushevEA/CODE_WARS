const switcher = {
    a: 1,
    b: 2,
    c: 3
};

function execute(str) {
    return 'a1 ' + str + switcher;
}

module.exports.execute = execute;

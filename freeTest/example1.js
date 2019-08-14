const
    data = {
        a: 123,
        b: 'qwerty',
        c: true
    },
    f = (str) => 'a1 ' + str + data,
    switcher = {
        a: f,
        b: f,
        c: f,
        d: f,
        e: f,
        f: f,
    };

function execute(str) {
    return switcher[str](str);
}

module.exports.execute = execute;

const
    f = (str) => 'a2 ' + str +
        {
            a: 123,
            b: 'qwerty',
            c: true
        };

function execute(str) {
    switch (str) {
        case 'a':
            return f(str);
        case 'b':
            return f(str);
        case 'c':
            return f(str);
        case 'd':
            return f(str);
        case 'e':
            return f(str);
        case 'f':
            return f(str);
    }
}

module.exports.execute = execute;

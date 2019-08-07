function execute(str) {
    let res = '';
    switch (str) {
        case 'a':
            res = (str) => str;
            break;
        case 'b':
            res = (str) => str;
            break;
        case 'c':
            res = (str) => str;
            break;
        case 'd':
            res = (str) => str;
            break;
        case 'e':
            res = (str) => str;
            break;
        case 'f':
            res = (str) => str;
            break;
        case 'g':
            res = (str) => str;
            break;
        case 'j':
            res = (str) => str;
            break;
        case 'k':
            res = (str) => str;
            break;
        case 'l':
            res = (str) => str;
            break;
        default:
            res = (str) => 'unknown';
            break;
    }
    return res(str);
}

module.exports.execute = execute;

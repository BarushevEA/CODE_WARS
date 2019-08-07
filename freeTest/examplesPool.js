const example1 = require('./example1');
const example2 = require('./example2');

function main(string) {
    return example1.execute(string);
}

function example(string) {
    return example2.execute(string);
}

module.exports.main = main;
module.exports.example = example;

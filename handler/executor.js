function execute(cb, name, arg, count) {
    let result = cb(arg),
        start = Date.now();
    for (let i = 0; i < count; i++) {
        cb(arg);
    }
    const delay = Date.now() - start;
    console.log(`${name.toUpperCase()} - result: ${result}, delay: ${delay}`);
}

function calculate(cb, name, arg, count = 5000000) {
    console.log(`================> ${name}`);
    execute(cb.main, `main`, arg, count);
    execute(cb.example, `example`, arg, count);
    console.log();
}

module.exports.execute = calculate;


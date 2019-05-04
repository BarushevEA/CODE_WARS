function main(data) {
    const
        v1 = data.v1,
        v2 = data.v2,
        g = data.g;
    if (v1 >= v2) return null;
    let seconds = Math.trunc(g / (v2 - v1) * 3600);
    const h = (Math.trunc(seconds / 3600));
    const m = (Math.trunc((seconds - h * 3600) / 60));
    const s = (seconds - h * 3600 - m * 60);
    return [h, m, s];
}

function example(data) {
    const
        v1 = data.v1,
        v2 = data.v2,
        g = data.g;
    if (v2 < v1) {
        return null;
    }
    const seconds = Math.floor(g / (v2 - v1) * 3600);
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds - h * 3600) / 60);
    const s = seconds - h * 3600 - m * 60;
    return [h, m, s];
}

module.exports.main = main;
module.exports.example = example;

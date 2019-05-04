let moveZeros = function (arr) {
    // TODO: Program me
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[counter] = arr[i];
            counter++;
        }
    }
    if (counter === 0) return;
    for (let i = counter; i < arr.length; i++) arr[i] = 0;
};

let arr = [1, 2, 0, 1, 0, 1, 0, 3, 0, 1];
moveZeros(arr);
console.log(arr);


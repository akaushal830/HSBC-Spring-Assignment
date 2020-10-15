function squareArray(arr) {
    for (var i in arr) {
        arr[i] = arr[i] * arr[i];
    }
    return arr;
}
console.log(squareArray([1, 2, 3, 4, 5]));

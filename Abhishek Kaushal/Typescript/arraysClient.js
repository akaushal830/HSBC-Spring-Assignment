function avgMinMax(arr) {
    var min = 1000000;
    var max = -1000000;
    var sum = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var i = arr_1[_i];
        sum += i;
        min = Math.min(min, i);
        max = Math.max(max, i);
    }
    console.log(sum / arr.length);
    console.log(min);
    console.log(max);
}
avgMinMax([5, 3, 6, 9, 8, 7]);

function strJoin(separator) {
    var arr = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arr[_i - 1] = arguments[_i];
    }
    arr.sort;
    var res = "";
    for (var _a = 0, arr_1 = arr; _a < arr_1.length; _a++) {
        var str = arr_1[_a];
        res = res.concat(str, separator);
    }
    console.log(res);
}
strJoin("#", "Abhishek", "Kaushal");

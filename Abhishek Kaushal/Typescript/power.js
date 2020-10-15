function pow(x, y) {
    var mult = 1;
    while (y > 0) {
        mult = mult * x;
        y--;
    }
    console.log(mult);
}
pow(2, 10);

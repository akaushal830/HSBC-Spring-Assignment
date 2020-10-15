var Product = /** @class */ (function () {
    function Product(pId, pName) {
        this.pId = pId;
        this.pName = pName;
    }
    return Product;
}());
var Products = /** @class */ (function () {
    function Products() {
        this.products = [new Product(1, "Prod1"), new Product(2, "Prod2"), new Product(3, "Prod3")];
    }
    Products.prototype.printAllProducts = function () {
        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
            var p = _a[_i];
            console.log(p);
        }
    };
    return Products;
}());
var pr = new Products();
pr.printAllProducts();

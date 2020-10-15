class Product{
    pId:number;
    pName:string;

    constructor(pId:number , pName:string)
    {
        this.pId = pId;
        this.pName = pName;
    }
}

class Products{
    products:Array<Product> = [new Product(1,"Prod1") , new Product(2,"Prod2"),new Product(3, "Prod3")];

    printAllProducts()
    {
        for(var p of this.products)
        {
            console.log(p);
        }

    }

}

let pr = new Products();
pr.printAllProducts();



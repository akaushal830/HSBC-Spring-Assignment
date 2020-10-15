function pow(x:number , y:number)
{
    var mult:number = 1;
    while(y>0)
    {
        mult = mult*x;
        y--;
    }
    console.log(mult);
}

pow(2,10);
function strJoin(separator:string , ...arr:string[] )
{
    arr.sort;
    var res:string="";
    for(var str of arr)
    {
        res = res.concat(str,separator);
    }
    console.log(res);
}

strJoin("#", "Abhishek" , "Kaushal");
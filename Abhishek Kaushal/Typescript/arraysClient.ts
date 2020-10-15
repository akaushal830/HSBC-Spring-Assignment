function avgMinMax(arr:number[])
{
    var min:number = 1000000;
    var max:number = -1000000;
    var sum:number = 0;
    for(var i of arr)
    {
        sum+= i; 
        min = Math.min(min,i);
        max = Math.max(max,i);
    }

    console.log(sum/arr.length);
    console.log(min);
    console.log(max);
}

avgMinMax([5,3,6,9,8,7]);
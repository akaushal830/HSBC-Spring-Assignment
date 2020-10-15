var n:number = 12345;

var sum:number = 0;
while(n>0)
{
    sum = sum + n%10;
    n = Math.floor(n/10);
}

console.log(sum);
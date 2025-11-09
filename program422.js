function CountDigit(No)
{
    let Count = 0;
    while(0 != No)
    {
        No = Math.floor(No / 10);
        console.log(No);
        Count++;
    }
    return Count;
}
let Val = 123;
let Ret = 0;

Ret = CountDigit(Val);
console.log(Ret);
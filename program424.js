function SumDigit(No)
{
    let Digit = 0;
    let Sum = 0;
    while(0 != No)
    {
        Digit = No % 10;
        Sum = Digit + Sum;
        No = Math.floor(No / 10);
    }
    return Sum;
}
let Val = 123;
let Ret = 0;

Ret = SumDigit(Val);
console.log(Ret);
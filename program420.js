function SumFactors(No)
{
    let Sum = 0;
    for(let iCnt = 1; iCnt <= (No / 2); iCnt++)
    {
        if((No % iCnt) == 0)
        {
            Sum = Sum + iCnt;
        }
    }
    return Sum;
}
let Val = 12;
let Ret = 0;

Ret = SumFactors(Val);
console.log(Ret);
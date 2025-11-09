function Summation(Brr)
{
    let Sum = 0;
    for(let iCnt = 0; iCnt < Brr.length; iCnt++)
    {
        Sum = Sum + Brr[iCnt];
    }
    return Sum;
}
let Arr = [11,21,51,101,111,121]
let Ret = 0;

Ret = Summation(Arr);
console.log(Ret);
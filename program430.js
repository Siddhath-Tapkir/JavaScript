function CountSmall(Arr)
{
    let iCount = 0;
    for(let iCnt = 0; iCnt < Arr.length; iCnt++)
    {
        if(Arr[iCnt] >= 'a' && Arr[iCnt] <= 'z')
        {
            iCount++;
        }
    }
    return iCount;
}
let Ret = 0;
Ret = CountSmall("InDiA");

console.log(Ret);
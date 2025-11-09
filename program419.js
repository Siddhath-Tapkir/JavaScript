function Maximum(Brr)
{
    let iMax = 0;
    iMax = Brr[0];
    for(let iCnt = 0; iCnt < Brr.length; iCnt++)
    {
        if(iMax < Brr[iCnt])
        {
            iMax = Brr[iCnt];
        }
    }
    return iMax;
}
let Arr = [11,21,51,121,101,111]
let Ret = 0;

Ret = Maximum(Arr);
console.log(Ret);
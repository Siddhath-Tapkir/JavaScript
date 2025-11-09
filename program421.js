function ChkPerfect(No)
{
    let Sum = 0;
    for(let iCnt = 1; iCnt <= (No / 2); iCnt++)
    {
        if((No % iCnt) == 0)
        {
            Sum = Sum + iCnt;
        }
    }
    if(Sum == No)    
    {
        return true;
    }
    else
    {
        return false;
    }
    /*
        return (Sum == No);
    */
}
let Val = 28;
let Ret = false;

Ret = ChkPerfect(Val);
if(true == Ret)
{
    console.log(Val+" Is A perfect number");
}
else
{
    console.log(Val+" Is not a perfect number");
}
function Addition(No1, No2)
{
    return No1 + No2;
}

function demo()
{
    return Addition;
}

let Ret = demo();

let Ans = 0;

Ans = Ret (10,11);
console.log(Ans);
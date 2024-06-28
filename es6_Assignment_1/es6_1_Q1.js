

function multiplywithcallback(num1,num2,callbackfun){
    const res=num1*num2;
    callbackfun(res);
}

function printfun(param1)
{
    console.log(`The result is : ${param1}`);
}


multiplywithcallback(7,9,printfun);

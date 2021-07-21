function receivesAFunction(callBack){
    callBack();
    return "Morning!";
}

function returnsANamedFunction(){
    return function aNamedFunction(){};
}

function returnsAnAnonymousFunction(){
    return function (){}
}
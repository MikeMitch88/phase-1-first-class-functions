function receivesAFunction(callback){
    callback();
}
function returnsANamedFunction(){
    function namedFunction(){
    }
    return namedFunction;
}
function returnsAnAnonymousFunction(){
    return function(){
        console.log("This is an anonymous function");
    }
}    
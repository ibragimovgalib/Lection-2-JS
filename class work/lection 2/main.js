// Recoursion: Factorial
{
    function factorial(n){
        if(n==1) {
            return 1
        }
        return n * factorial(n-1)
    }
    console.log(factorial(5));
}

// Double Factorial
{
    function doubleFactorial(n){
        if(n<=1) {
            return 1
        }
        return n * doubleFactorial(n-2)
    }
    console.log(doubleFactorial(9));
}

// Recoursion: Sum
{
    function sum(n){
        if(n<=1){
            return 1
        }
        return n + sum(n-1)
    }
    console.log(sum(12));
}

// Recursion: Length of a String
{
    let s = "apple"
    console.log(s.length);     
}
{
    function leng(s,cnt=0){
        if(s.length==cnt){
            return cnt
        }
        return leng(s,cnt+1)
    }
    console.log(leng("apple"));
}

// Recursion: Fibonacci Numbers
{
    function fib(n){
        if(n<=1){
            return n
        }
        return fib(n-1)+fib(n-2)
    }
    console.log(fib(8));
}

// Closure

// 1___________
{
    function constt(s){
    return function(){
        return s
    }
}
console.log(constt("apple")());
}


// 2
function adds1(n){
    return function(){
        return Math.floor(n)+1
    }
}
console.log(adds1(5.7)());

// Returning an "Add" Function
function add(n1){
    return function(n2){
        return n1+n2
    }
}
let ss=add(10)
console.log(ss(20));

// All About Anonymous Functions: Adding Suffixes
function add_ly(str){
    return function(ly){
        return str+ly
    }
}
console.log(add_ly("total")("ly"));
console.log(add_ly("ruth")("less"));

// Funtion Times 3
function product(a1,b1){
    return function(a2,b2){
        return function(a3,b3){
            return a1*a2*a3+b1*b2*b3
        }
    }
}
console.log(product(1,2)(1,1)(2,3));
console.log(product(10,2)(5,0)(2,3));


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

// 1___________?

// 2
{
    function adds1(n){
        return n+1
    }
    console.log(adds1(5));
}
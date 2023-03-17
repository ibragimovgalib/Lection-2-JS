// Task 1
function inequality(a, b, c) {
  if (a < b && a < c) return true;
  else return false;
}
console.log(inequality(2, 3, 4));

// Task 2
function minNum(a, b, c) {
  if ((a <= b && b <= c) || b >= c) return a;
  else if ((b <= a && a <= c) || a >= c) return b;
  else return c;
}
console.log(minNum(-55, -99, 0));

// Task 3___________?
function minAndMax(a, b, c) {
  
}
console.log(minAndMax(20, 12, 2));

// Task 4
function nextEvenNum(n){
    return Math.floor(n/2)*2+2
}
console.log(nextEvenNum(5));

// Task 5___________?

// Task 6__________?

// Task 7
function incAndDec(a,b,c){
    if(a<=b && b<=c) return [a*2, b*2, c*2]
    else return [-a, -b, -c]
}
console.log(incAndDec(4,2,3));

// Task 8
function sequenceNums(a,b,c,d){
    if(a!=b && a!=c && a!=d) return 1
    else if(b!=a && b!=c && b!=c) return 2
    else if(c!=a && c!=b && c!=d) return 3
    else return 4
}
console.log(sequenceNums(2,4,2,2));

// Task 9__________?
function sumOfinequalities(n,a){
    if(a>Math.floor(Math.floor(n)+n%10)) return true
    else return false
}
console.log(sumOfinequalities(24,7));

// Task 10_____________?

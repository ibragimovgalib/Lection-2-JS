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

// Task 3_______________________________
function minAndMax(a, b, c) {
  return [Math.min(a,b,c), Math.max(a,b,c)]
}
console.log(minAndMax(20, 12, 2));

// Task 4_______________________________________
function nextEvenNum(n){
    return Math.floor(n/2)*2+2
}
console.log(nextEvenNum(5));

// Task 5________________________________________
function sequenceNum(a,b,c){
  s=0
  if(a==c && a!=b) s=2
  else if(a==b && a!=c) s=3
  else s=1
  return s
}
console.log(sequenceNum(3,2,3));

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
function threeGigitNum(n){
  let a1=Math.floor(n/100)
  let a2=Math.floor(n/10)%10
  let a3=n%10
  if(a1*a2*a3>=100) return true
  else return false 
}
console.log(threeGigitNum(111));

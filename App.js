function firstFunction(a){
  console.log(a);
}
console.log("hello");

function cal(a,b,callback){
  let sum=a+b;
  console.log(sum);
 // console.log(callback);
  callback(sum);
}
cal(2,4,firstFunction)
// settime out

function first(a,b){
  let multi = a*b;
  console.log (multi);
}
first(2,2);

function SECOND()

{
console.log(" i am 10 years old ");

}

setTimeout(SECOND,3000);
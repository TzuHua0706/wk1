// 一
(() => {
  outage = 20;
  var height = 170;
  if(outage == 20)
    height = 180;
  console.log(`height = ${height}`);
})();
console.log(`outAge = ${outage}`);
//console.log(`height = ${height}`);  //defined

// 二
"use strict";
function testFunction(){
  var testvar = 4;
  return testvar;
}
testvar = 5;

// 三
var a = 5;
var b = 10;

if(a === 5){
  let a = 4;
  var b = 1;

  console.log(a);  //4
  console.log(b);  //1
}

  console.log(a);  //5
  console.log(b);  //1

// 一
function b1(){
  var myVar;
  console.log(myVar);  //undefined
}

function a1(){
  var myVar = 1;
  b1();
  console.log(myVar);  //1
}

var myVar = 2;
console.log(myVar);  //2
a1();

// 二
function b1(){
  console.log(myVar);  //2
}

function a1(){
  var myVar = 1;
  b1();
  console.log(myVar);  //1
}

var myVar = 2;
console.log(myVar);  //2
a1();

// 三
function a1(){
  var myVar = 1;
  function b1(){
    //var myVar;
    console.log(myVar);  //1
  }
   b1();
   console.log(myVar);  //1
}

var myVar = 2;
console.log(myVar);  //2
a1();

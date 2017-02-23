// 一
var addclosure = (() => {
  var counter = 0;
  return () => {
    counter += 1;
    console.log(counter);
  }
})();
addclosure();
addclosure();
addclosure();

// 二
var add = (x) => {
  return (y) => {
    console.log(x+y);
  };
}

var add5 = add(5);  //x = 5
add5(3);  //y = 3

var add5 = add(5);

var add5 = function(y) {
  return 5 + y;
}

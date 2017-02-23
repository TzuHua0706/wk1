var greetMe = function(){
  console.log('Hi Tony!');
}
greetMe();

var greetSam = () =>console.log('Hi Sam!');
greetSam();

var greetYou = name=> console.log('Hi ' + name + '!');
greetYou('NTUE');

var square1 = function(num){return num*num};
var square2 = num => {return num*num};
var square3 = num => num*num;

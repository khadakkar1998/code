
//var a = prompt('Enter the first variable: ');
var a = prompt('Enter the first variable');
var b = prompt('Enter the second variable: ');
function setup(){

  var b2 = createButton("click here to swap");
  b2.mousePressed(swap);
 
}

function draw()
{

}

function swap(){
[a, b] = [b, a];

console.log("This value of a after swapping:" ,+a);
console.log("This value of b after swapping:" ,+b);

}
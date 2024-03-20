/*console.log("connected")
var head = document.getElementById("head1");
console.dir(head);*/

/*advanced array functions*/
let mul = function(x,y)
{
    console.log(x*y);
}
let mulBy10 = mul.bind(this,10);///
mulBy10(7);
mulBy10(8);
mulBy10(9);
let mul1 = function(y)
{
    let x =10;
    console.log(x+y);
}



/*var x;
if(x==undefined)
{
	console.log("x is undefined") ;
}
var x=5 ;
if(x==undefined)
{
	console.log("x is undefined")
}
else 
{
	console.log("x has been modified , it's now defined")
}
function a(x,y)
{
	var x =5 ;
	var y=7;
	return (x==y) ;
}
console.log(a());
function b()
{
	return {
		name : "hind"
	};
}
console.log(b()); 
var company= new Object();
company.name="newtech";
company.logo="i won't stop untill i become rich ";
company.ceo=new Object ();
company.ceo.name="hind";
company.ceo["date of creation"]=2026 ;
console.log(company);
console.log("company ceo is :" + company.ceo.name);
console.log("the company was created in :" + company.ceo["date of creation"]);

function multiply(multiplier)
{
  var func=function(x){
     return multiplier*x;
  };
  return func ;
}
var three=multiply(3);
console.log(multiply(4)(10));
var dop=function(x,operation)
{
	return operation(x);
}
console.log(dop(4,three));
var a ={
	x:7
};
var b=a ;
console.log( a);
console.log(b);
b.x=15 ;
console.log("after updating the value of b let's check hehe");
console.log(a);
console.log(b);
 function changeobj(obg)
{
	console.log("before changing it ");
	console.log(obg.x);
	console.log("after changing it");
	obg.x=15;
	console.log(obg.x);
}
 obg = { x:7};
 changeobj(obg);
 console.log("let's check if the passage by reference is really working");
 console.log(obg.x); 
 function Circle(radius)
 {
this.radius = radius; 	
this.getarea=
function()
{
	return Math.PI*Math.pow(radius,2);
};
 };
 var cercle=new Circle(10);
 console.log(cercle);
var family=
{
	name:"hind",
	age:9.5 ,
	getarea:function()
	{
		return this.age*2;
	}
};
console.log(family.getarea());*/
// 
document.addEventListener( "DOMContentLoaded", 
	function(event)
	{ 
		console.log(document.getElementById("title"));
		console.log(event);
console.log(document instanceof HTMLDocument);
function sayhello(event)
{   
	 console.log(event);
     name=document.getElementById("name").value;
     this.textContent="said it" ;
	 var msg ="<h2> hello " + name + "  !</h2>";
	 document.getElementById("content").innerHTML = msg ;
	 if(name==="student")
	 {
	 	document.getElementById("title").textContent+= "yay";
	 }


}
document.querySelector("button").addEventListener("click",sayhello);
	
	document.querySelector("body").addEventListener("mousemove",
       function(event)
       {
       	console.log("x is:" + event.clientX);
       	console.log("y is:" + event.clientY);
       }
		);

	});
